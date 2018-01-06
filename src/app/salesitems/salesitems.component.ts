import { Component, OnInit } from '@angular/core'
import { environment } from '../../environments/environment';
import { SalesitemsService } from '../../services/salesitems.service';
import { SaleItem } from '../../shared/models/saleitem';
import { Page } from '../../shared/models/page';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salesitems',
  templateUrl: './salesitems.component.html',
  styleUrls: ['./salesitems.component.css']
})
export class SalesitemsComponent implements OnInit {
  public data: Array<SaleItem>;
  public current_page: any;
  public total: Number;
  public loadingIndicator: boolean;
  public page: Page;
  constructor(private saleitemsService: SalesitemsService, private toastr: ToastrService ) {}

  ngOnInit() {
    this.loadingIndicator = true;
    this.page = new Page();
    this.page.pageNumber = 1;
    this.page.size = 10;
    this.listItems();
  }

  public listItems(pageInfo: any = { offset: 0 }) {
    this.loadingIndicator = true;
    this.data = [];
    let page = pageInfo.offset === 0 ? 1 : pageInfo.offset + 1;
    this.saleitemsService.list(page)
      .subscribe(
        (response: any) => {
          this.loadingIndicator = false;
          this.data = response.data;
          this.page.pageNumber = response.current_page;
          this.page.totalElements = response.total;
        }
      );
  }

  public deleteItem(id) {
    this.saleitemsService.delete(id)
    .subscribe(response => {
      this.listItems({ offset:  0});
      setTimeout(() => this.toastr.success(`Item con id ${id} fue borrado correctamente.`))
    })
  }

}
