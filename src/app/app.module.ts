import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemodatabindingComponent } from './demodatabinding/demodatabinding.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { FormsModule } from '@angular/forms';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { ChildComponent } from './child/child.component';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { InputDecoratorAssignmentComponent } from './input-decorator-assignment/input-decorator-assignment.component';
import { StructuralDirectivesAssignmentComponent } from './structural-directives-assignment/structural-directives-assignment.component';
import { NgifComponent } from './ngif/ngif.component';


@NgModule({
  declarations: [
    AppComponent,DemoComponent, Demo2Component, DemodatabindingComponent, NgswitchComponent, AttributedirComponent, ChildComponent, DataBindingAssignmentComponent, InputDecoratorAssignmentComponent, StructuralDirectivesAssignmentComponent, NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
