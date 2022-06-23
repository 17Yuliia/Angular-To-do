import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FilterComponent } from './filter/filter.component';
import { ItemComponent } from './body/item/item.component';
import { FormComponent } from './form/form.component';
import { TaskFilterPipe } from '../pipes/task-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FilterComponent,
    ItemComponent,
    FormComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
