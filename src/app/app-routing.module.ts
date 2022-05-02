import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecicladorComponent } from './components/create-reciclador/create-reciclador.component';
import { ListRecicladoresComponent } from './components/list-recicladores/list-recicladores.component';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';


const routes: Routes = [
  {path: '', redirectTo:'list-recicladores', pathMatch:'full'},
  {path: 'list-recicladores', component:ListRecicladoresComponent},
  {path: 'create-Reciclador', component:CreateRecicladorComponent},  
  {path: 'editReciclador/:id', component:CreateRecicladorComponent}, 
  {path: '', redirectTo:'list-usuarios', pathMatch:'full'},
  {path: 'list-usuarios', component:ListUsuariosComponent},
  {path: 'create-Usuario', component:CreateUsuarioComponent},  
  {path: 'editUsuario/:id', component:CreateUsuarioComponent}, 
  {path: '**', redirectTo:'list-usuarios', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
