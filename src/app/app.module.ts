import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { NewBatchComponent } from './new-batch/new-batch.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExecBatchComponent } from './exec-batch/exec-batch.component';
import { LoginComponent } from './login/login.component';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { BatchHistoryComponent } from './batch-history/batch-history.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    NewBatchComponent,
    ExecBatchComponent,
    LoginComponent,
    BatchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
