import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router} from '@angular/router';

// Interfaces - Model
import { Item } from '../../../shared/interfaces/item.interface';

// Services
import { VarietiesService } from '../../../shared/services/varieties.service';
import { SaleitemsService } from '../../../shared/services/saleitems.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html'
})
export class ItemNewComponent implements OnInit {
  private varieties;
  private p: number = 0;
  private total: number = 0;

  public itemForm : FormGroup;
  private sumitted: boolean;
  private item: Item;


  constructor(
      private _VarietiesService: VarietiesService,
      private _SaleItemService: SaleitemsService,
      private _fb: FormBuilder,
      private toastr: ToastsManager,
      private vcr: ViewContainerRef,
      private _router: Router) { 
          this.toastr.setRootViewContainerRef(vcr);
          this.createControls();
    }

  ngOnInit() {
    this.item = {
      name: '',
      code: '',
      notes: '',
      price: 0,
      presentation: 0,
      variety_id: 0
    };
  	this.getVarietiesPerPage(1);
  }

  createControls(){
      this.itemForm = this._fb.group({
      name: ['',[<any>Validators.required,<any>Validators.minLength(6)]],
      code: ['',[<any>Validators.required]],
      notes: ['', [<any>Validators.required , <any>Validators.minLength(6)]],
      price: ['0',[<any>Validators.required]],
      presentation: ['0',[<any>Validators.required]],
      variety_id: ['0',[<any>Validators.required]],
    });
  }

  onSubmit(item: Item, isValid: boolean) {
    this.sumitted = true;
    if (isValid) {
      this._SaleItemService.createItem(item)
        .subscribe(
            rt => console.log(rt),
            er => this.toastr.error('Error creating item!','Oops!'),
            () => {
              this.toastr.success('Item Created Successfully!', 'Success!');
              setTimeout(() => 
              {
                this._router.navigate(['/starter/items']);
              },
              5000);

            }
        );
    }
  }


  getVarietiesPerPage(page: number){
  	this._VarietiesService.getVarieties(page)
          .subscribe(
             response => {
               this.varieties = response.data;
               this.p = response.current_page;
               this.total = response.total;
             },
             error => this.toastr.error('Error getting Varieties!','Oops!'),
             () => this.toastr.success('Varieties Obtained Successfully!','Success!')
             );
  }

}
