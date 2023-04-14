import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaselineComponent } from './baseline/baseline.component';
import { ProjectComponent } from './project/project.component';
import { BaselineListComponent } from './baseline/list/list.component';
import { BaselineDetailComponent } from './baseline/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BaselineComponent,
    ProjectComponent,
    BaselineListComponent,
    BaselineDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
