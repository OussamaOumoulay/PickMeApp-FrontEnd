import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {


  constructor(private httpClient:HttpClient) {}
  public host:string="http://localhost:8080"
  public hosts:string="http://localhost:8081"

  public getBatch(){
    return this.httpClient.get(this.host+"/batches");
  }
  public getHistory(){
    return this.httpClient.get(this.host+"/batchHistories");
  }
  public getProd(){
    return this.httpClient.get(this.host+"/produits");
  }
  public getReseau(){
    return this.httpClient.get(this.host+"/reseaus");
  }
  public LaunchBatch(){
    return this.httpClient.get(this.hosts+"/startJob");
  }
  public deleteRessource(url:any){
    return this.httpClient.delete(url);
  }
  public AddRessource(url: any, data: any){
    return this.httpClient.post(url,data);
  }
  public GetRessource(url:any){
    return this.httpClient.get(url)
  }
  public PatchRessource(url:any,data:any){
    return this.httpClient.patch(url,data)
  }
  public PutRessource(url:any,data:any){
    return this.httpClient.put(url,data)
  }
  public PostRessource(url:any,data:any){
    return this.httpClient.post(url,data)
  }
  public getjobdata() {
    return this.httpClient.get(this.hosts+"/getdatajobs");
  }
}
