import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//Modules
import {UserInfoRoutingModule} from './user-info-routing.module';
//Components
import {UserInfoComponent} from './user-info.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';

@NgModule({
    imports: [CommonModule, UserInfoRoutingModule],
    declarations: [UserInfoComponent, UserFormComponent, UserListComponent]
})
export class UserInfoModule { }
