import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [

  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
