import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataHandlerService } from './shared/services/DataHandler.service';
import { FormsModule } from '@angular/forms';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataHandlerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
