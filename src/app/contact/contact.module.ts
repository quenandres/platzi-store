import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
//Agrega decorador
@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule
    ]
})
export class ContactModule {

}