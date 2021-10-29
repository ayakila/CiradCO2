import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculGesRoutingModule } from './calcul-ges-routing.module';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalculGesRoutingModule,
    MatChipsModule
    //MatFormFieldModule,
    // BrowserAnimationsModule,
    // MatSelectModule,
    // FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalculGesModule { }
