import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SalesitemsService } from '../../../services/salesitems.service';
import { VarietiesService } from '../../../services/varieties.service';
import { Observable } from 'rxjs/Observable';
import { SaleItem } from '../../../shared/models/saleItem';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public presentations: Array<any>;
  public loadingIndicator: boolean;
  public title: string;
  public id: string;
  public form: FormGroup;
  public varieties: Observable<Array<any>>;
  public sending: boolean;
  public disableButtom: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private salesitemsService: SalesitemsService,
    private varietiesService: VarietiesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.sending = false;
    this.id = this.route.snapshot.params.id;
    this.title = this.route.snapshot.data.title + (this.id || '')
    this.form = this.fb.group({
      name: [null , Validators.compose([Validators.required])],
      code: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      presentation: [null, Validators.compose([Validators.required])],
      variety_id: [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.loadingIndicator = true;
    this.presentations = [{ id: '0', name: 'Caja' }, { id: '1', name: 'KG'}, { id: '2', name: 'Otros'}];
    this.listVarieties().add(() => {
      if(this.id) {
        this.getCurrentItem();
      } else {
        this.loadingIndicator = false;
      }
    })
  }

  getCurrentItem() {
    this.salesitemsService.show(this.id).subscribe(
      (response: any) => {
        this.loadingIndicator = false;
        this.form.patchValue({
          id: response.id,
          name: response.name,
          code: response.code,
          price: response.price,
          presentation: response.presentation,
          variety_id: response.variety_id
        });
      });
    }

    listVarieties() {
      return this.varietiesService.list().subscribe(
        (response: any) => {
          this.varieties = response.data;
          if(!this.id) {
            this.form.patchValue({ variety_id: 113, presentation: '2'});
          }
        }
      )
    }

    onSave() {
      let saleItem = new SaleItem(
        this.form.controls['name'].value,
        this.form.controls['code'].value,
        this.form.controls['price'].value,
        this.form.controls['presentation'].value,
        this.form.controls['variety_id'].value
      )
      this.sending = true;
      if(this.id) {
        return this.salesitemsService.update(this.id, saleItem).subscribe(
          (result: any) => {
            setTimeout(() => {
              this.disableButtom = true;
              this.toastr.success(`Item con id ${result.id} fue actualizado correctamente.`);
              this.sending = false;
            });
          },
          (error: any) => {
            let errors = '';
            Object.keys(error.error.errors).forEach(key => {
              let value = error.error.errors[key];
              errors += ((errors && '<br>' ) + `${value.toString()}`)
            });
            setTimeout(() => {
              this.toastr.error(errors, 'Ups, tenemos errores', { enableHtml: true })
              this.sending = false;
            })
          },
          () => {
            setTimeout(() => this.router.navigate(['/salesitems']), 2000);
          }
        )
      } else {
        return this.salesitemsService.create(saleItem).subscribe(
          (result: any) => {
            setTimeout(() => {
              this.disableButtom = true;
              this.toastr.success(`Item con id ${result.id} fue creado correctamente.`);
              this.sending = false;
            });
          },
          (error: any) => {
            let errors = '';
            Object.keys(error.error.errors).forEach(key => {
              let value = error.error.errors[key];
              errors += ((errors && '<br>' ) + `${value.toString()}`)
            });
            setTimeout(() => {
              this.toastr.error(errors, 'Ups, tenemos errores', { enableHtml: true })
              this.sending = false;
            })
          },
          () => {
            setTimeout(() => this.router.navigate(['/salesitems']), 2000);
          }
        )
      }
    }
  }
