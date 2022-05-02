import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios: any[]=[];

  constructor(private _usuarioService: UsuarioService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getUsuarios()
  }
  
  getUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data => {
      this.usuarios=[];
      //data.sort();
      //data.reverse();
      data.forEach((element:any)=> {
       // console.log(element.payload.doc.id);// obtengo id
       // console.log(element.payload.doc.data());//obtengo datos

        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
    //  console.log(this.recicladores);//obtengo datos
    });   

  }

  eliminarUsuario(id:string){
    this._usuarioService.eliminarUsuario(id).then(()=>{
      this.toastr.warning('Usuario Borrado', 'Eliminado!',{positionClass: 'toast-bottom-right'});
    }).catch(error =>{
      console.log(error);
      this.toastr.error('Error al Borrar', 'Error!',{positionClass: 'toast-bottom-right'});
    });
  }

}
