import { Component, OnInit } from '@angular/core';
import {BatchService} from '../services/batch.service';
import {element} from 'protractor';

@Component({
  selector: 'app-exec-batch',
  templateUrl: './exec-batch.component.html',
  styleUrls: ['./exec-batch.component.css']
})
export class ExecBatchComponent implements OnInit {
  public batches:any;
  public jobs : any;
  constructor(private batchService:BatchService) { }
  ngOnInit(): void {
    this.onGetBatch()
    this.onGetjobdata()
  }

  onGetBatch() {
    this.batchService.getBatch()
      .subscribe(data=>{
        this.batches=data;
      },err => {
        console.log(err);
      });

  }
  onGetjobdata() {
    this.batchService.getjobdata()
      .subscribe(data=>{
        this.jobs=data;
      },err => {
        console.log(err);
      });

  }










}
