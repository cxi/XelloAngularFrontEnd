import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,    
    MatButtonModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent]
})
export class CoreModule { 
  constructor (

    @Optional() @SkipSelf() parentModule: CoreModule

  ) {

    if (parentModule) {

      throw new Error('CoreModule is already loaded. Import only in AppModule');

    }

  }
}
