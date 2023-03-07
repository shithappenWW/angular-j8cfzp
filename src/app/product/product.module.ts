import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [ProductComponent],
  declarations: [ProductComponent],
})
export class ProductModule {}
