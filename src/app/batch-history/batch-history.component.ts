import { Component, OnInit } from '@angular/core';
import {BatchService} from '../services/batch.service';
@Component({
  selector: 'app-batch-history',
  templateUrl: './batch-history.component.html',
  styleUrls: ['./batch-history.component.css']
})
export class BatchHistoryComponent implements OnInit {
  public batchHistories:any;
  public jobs : any;
  constructor(private batchService:BatchService) { }
  ngOnInit(): void {

    this.onGetHistory()
  }

  onGetHistory() {
    this.batchService.getHistory()
      .subscribe(data=>{
        this.batchHistories=data;
      },err => {
        console.log(err);
      });

  }
}

