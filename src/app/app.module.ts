import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikeListComponent } from './hike-list/hike-list.component';
import { HikeItemsComponent } from './hike-items/hike-items.component';
import { FeeCalculatorComponent } from './fee-calculator/fee-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HikeListComponent,
    HikeItemsComponent,
    FeeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
