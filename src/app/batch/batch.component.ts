import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BatchService} from '../services/batch.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  public batches:any;
  public mode: string | undefined;
  public produits: any;
  public reseau: any;
  file: any;
  private p: any;
  defaultValue = 'true';

  constructor(
    private batchService:BatchService,
    private modalService: NgbModal
  ) { }
  ngOnInit(): void {
    this.onGetBatch();
    this.onGetProd();
    this.onGetRes();
  }
  onGetBatch() {
    this.batchService.getBatch()
      .subscribe(data=>{
        this.batches=data;
      },err => {
        console.log(err);
      });
  }
  onGetProd() {
    this.batchService.getProd()
      .subscribe(data=>{
        this.produits=data;
      },err => {
        console.log(err);
      });
  }
  onGetRes() {
    this.batchService.getReseau()
      .subscribe(data=>{
        this.reseau=data;
      },err => {
        console.log(err);
      });
  }

  EtatActived(p: any) {
    let batch={
      etat: false
    };
    this.batchService.PatchRessource(p._links.self.href,batch)
      .subscribe(data=>{
        this.onGetBatch();
      },err=>{
        console.log(err)
      })
  }
  onUpdate(data:any) {
    let body={
      codeProduit: data.codeProduit,
      reseau: data.reseau,
      batchName:this.p.batchName,
      dateCreation: this.onGetDate(),
      dateEcheance:data.dateEcheance,
      etat:data.etat,
      repository:this.file
    };
    this.batchService.LaunchBatch()
      .subscribe(res=>{
      console.log(res);
    },err => {
      console.log(err);
    })
    this.batchService.PutRessource(this.p._links.self.href,body)
      .subscribe(res=>{
        this.onGetBatch();
        console.log(res);
      },err => {
        console.log(err);
      })
    let bodys={
      codeProduit: data.codeProduit,
      reseau: data.reseau,
      batchName:this.p.batchName,
      dateCreation: this.onGetDate(),
      dateEcheance:data.dateEcheance,
      etat:data.etat,
      repository:this.file,
      status:"Executed",
      id:this.p.id
    };
    this.batchService.AddRessource(this.batchService.host+"/batchHistories",bodys)
      .subscribe(res=>{
        this.onGetBatch();
        console.log(res);
      },err => {
        console.log(err);
      })
    this.batchService.deleteRessource(this.p._links.self.href)
      .subscribe(data=>{
        this.onGetBatch();
      },err=>{
      })
  }
  onSaveBatch(data:any) {
    this.batchService.AddRessource(this.batchService.host+"/batches",data)
      .subscribe(res=>{
        this.mode='close';
        this.onGetBatch();
        console.log(res);
      },err => {
        console.log(err);
      })
  }
  EtatDesactived(p: any) {
    let batch={
      etat: true
    };
    this.batchService.PatchRessource(p._links.self.href,batch)
      .subscribe(data=>{
        this.onGetBatch();
      },err=>{
        console.log(err)
      })
  }


  onDeleteBatch(p: any) {
    let conf=confirm("êtes-vous sûr de vouloir supprimer");
    if(conf)   {
      this.batchService.deleteRessource(p._links.self.href)
        .subscribe(data=>{
            this.onGetBatch();
        },err=>{
        })
    }
  }

  onGetDate() {
    return new Date();
  }
  onNewBatch() {
   this.mode='new-bacth';
    this.onGetBatch();
  }
  fileChanged(e:any) {
    this.file = e.target.value;
    console.log('name of file' + this.file.name); // name of file
    console.log('path of file:   ' + e.target.files[0].name); // path of file
    console.log('path of file:   ' + e.target[0]); // path of file
  }

  uploadDocument(file:any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
    console.log('sadasdas' + file);
  }

  Execute(p: any) {
    this.onGetBatch()
    this.mode='open';
    this.p = p;
  }

  closeform() {
    this.mode='close';
  }
}
