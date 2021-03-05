import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { MaterialcontrolsModule } from '../materialcontrols.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialcontrolsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
