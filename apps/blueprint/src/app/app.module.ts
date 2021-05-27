import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomInputModule } from '@blueprint/custom-input';
import { CustomSelectModule } from '@blueprint/custom-select';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomInputModule, CustomSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
