import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent  {

    public model = new Item("","","",0,"",0);
    public variety_id: number ;
    public varieties: any;
    public success: boolean=false;
    public failure: boolean=false;
    public msjError:string;

    constructor( private _item:ItemService ){

        this._item.getVarieties().subscribe(
            data => this.varieties=data['data'],
            error => console.log(error)
        );
    }

    public onSubmit(){
        this.model.variety_id=this.variety_id;
        
        this._item.postItem(this.model).subscribe(
            data => {
                console.log(data);
                this.success=true;
                this.failure=false;
            },
            error => {
                if( error['error']['errors']['name'] ){
                    this.msjError="Failed operation (There cannot be 2 items with the same name)";
                }else{
                    this.msjError="Failed operation (The price must be below 999999.999999)";                    
                }

                console.log(error);
                this.failure=true;
                this.success=false;
            }
        );
    }

    public clear(){
        this.success=false;
        this.failure=false;
    }

    public widget(){
        $('#my-box-widget').boxWidget('collapse')
    }
}
