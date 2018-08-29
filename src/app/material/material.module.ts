import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class MaterialModule { }
