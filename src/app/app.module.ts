import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCmpComponent } from './book-cmp/book-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'book-cmp',
         component: BookCmpComponent
      }
   ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
