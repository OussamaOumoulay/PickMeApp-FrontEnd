import { Component, OnInit } from '@angular/core';
import {BatchService} from '../services/batch.service';

@Component({
  selector: 'app-new-batch',
  templateUrl: './new-batch.component.html',
  styleUrls: ['./new-batch.component.css']
})
export class NewBatchComponent implements OnInit {
  constructor(private batchService:BatchService) { }

  ngOnInit(): void {
  }
  onSaveBatch(data:any) {
    this.batchService.AddRessource(this.batchService.host+"/batches",data)
      .subscribe(res=>{
        console.log(res);
      },err => {
        console.log(err);
      })
  }
  onGetDate() {
    return new Date();
  }




}
