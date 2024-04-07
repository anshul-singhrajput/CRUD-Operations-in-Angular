import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'create', component:CreateComponent},
  {path:'read', component:ReadComponent},
  {path:'read/update/:id', component:UpdateComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
