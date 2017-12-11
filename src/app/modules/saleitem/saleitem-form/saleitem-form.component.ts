import { Component, OnInit } from '@angular/core';
import {SaleitemService} from '../../../shared/services/saleitem/saleitem.service';
import {SaleItem} from '../../../shared/model/saleitem.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VarietyService} from '../../../shared/services/variety/variety.service';
import {Variety} from '../../../shared/model/variety.model';

@Component({
    selector: 'app-saleitem-form',
    templateUrl: './saleitem-form.component.html',
    styleUrls: ['./saleitem-form.component.css']
})
export class SaleitemFormComponent implements OnInit {

    protected saleItem: SaleItem;
    protected varieties: Variety[];
    public form: FormGroup;

    constructor(protected saleitemService: SaleitemService,
                protected varietyService: VarietyService,
                protected router: Router,
                private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.saleItem = new SaleItem();
        this.createForm();
        this.varietyService.findAll()
            .subscribe((result: Variety[]) => {
               this.varieties = result;
            }, error => {
                console.log(error);
            });
    }

    private createForm() {
        this.form = this.formBuilder.group({
            name: [null, Validators.required],
            code: [null, Validators.required],
            price: ['', Validators.required],
            presentation: ['KG', Validators.required],
            variety_id: [null, Validators.required]
        });
    }

    createItem() {
        this.saleItem = Object.assign(new SaleItem(), this.form.value);
        this.saleItem.notes = 'Jojo';
        this.saleitemService.create(this.saleItem)
            .subscribe(() => {
                this.router.navigateByUrl('sale-items');
            }, error => {
                console.log(error);
            });
    }

}
