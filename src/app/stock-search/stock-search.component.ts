import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()
  private keyWord: string;

  private price: number;

  // 要带上传出的类型: EventEmitter<StockInfo>
  // 可以通多@Output改名
  // @Output()
  @Output('lastPrice')
  searchResult:EventEmitter<StockInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {

      let stockInfo: StockInfo = new StockInfo(this.keyWord, 100 * Math.random());

      this.price = stockInfo.price;

      // searchResault 做为事件传出去
      this.searchResult.emit(stockInfo);

      // this.keyWord='xxx';
    }, 3000);
  }

}

export class StockInfo {
  constructor (
    public name: string, public price: number
  ){

  }
}