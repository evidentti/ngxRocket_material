import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    UserRoutingModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
