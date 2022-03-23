import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecicladorComponent } from './components/create-reciclador/create-reciclador.component';
import { ListRecicladoresComponent } from './components/list-recicladores/list-recicladores.component';

const routes: Routes = [
  {path: '', redirectTo:'list-recicladores', pathMatch:'full'},
  {path: 'list-recicladores', component:ListRecicladoresComponent},
  {path: 'create-Reciclador', component:CreateRecicladorComponent},  
  {path: '**', redirectTo:'list-recicladores', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
