import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    EmployeeModule,
    ProductModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [SharedService],
})
export class AppModule {}
