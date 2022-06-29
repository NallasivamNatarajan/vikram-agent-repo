import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMacsaliteComponent } from './create-macsalite/create-macsalite.component';
import { MacsaliteDetailsComponent } from './macsalite-details/macsalite-details.component';
import { MacsaliteListComponent } from './macsalite-list/macsalite-list.component';
import { UpdateMacsaliteComponent } from './update-macsalite/update-macsalite.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    CreateMacsaliteComponent,
    MacsaliteDetailsComponent,
    MacsaliteListComponent,
    UpdateMacsaliteComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
    
    // AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
