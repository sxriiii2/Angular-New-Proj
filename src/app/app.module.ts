import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import Angular Router module
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReadblogComponent } from './readblog/readblog.component';
import { PostblogComponent } from './postblog/postblog.component';
import { BlogdataService } from './blogdata.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReadblogComponent,
    PostblogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule, // Configure Angular Router here
    AppRoutingModule
  ],
  providers: [BlogdataService], // Provide your services here
  bootstrap: [AppComponent],
})
export class AppModule {}
