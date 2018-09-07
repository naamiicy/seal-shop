import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: ":name", component: AboutComponent},
      {path: "contact", component: ContactComponent}
    ])
  ],
  declarations: [ContactComponent, AboutComponent]
})
export class AboutModule { }
