import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()
  private keyWord: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.keyWord='xxx';
    }, 3000);
  }

}
