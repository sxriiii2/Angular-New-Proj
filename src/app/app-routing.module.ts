import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostblogComponent } from './postblog/postblog.component';
import { ReadblogComponent } from './readblog/readblog.component';

const routes: Routes = [
  { path: 'post', component: PostblogComponent },
  { path:'read', component:ReadblogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
