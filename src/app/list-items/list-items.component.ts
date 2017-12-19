import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { log } from 'util';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

    public data: Array<any>=[];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "name";
    public sortOrder = "des";
    public top:number =0;

    constructor( private _item:ItemService ) {
      
        this._item.getItems(1).subscribe(
            data => {

                this.top=data['last_page'];
                this.data=this.data.concat(data['data']);

                for(let count=2; count<=this.top; count++){
                    this._item.getItems(count).subscribe(
                        data => {
                            this.data=this.data.concat(data['data']);
                        }
                    ); 
                }
            }
        ); 
    }
}
