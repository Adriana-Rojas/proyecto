import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {
  createUsuario: FormGroup;
  submitted =false;
  loading =false;
  id: string|null;
  titulo='Agregar Usuario';
  titulobtn='Agregar';

  constructor( private fb :FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute:ActivatedRoute) { 
      this.createUsuario=this.fb.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        documento: ['',Validators.required],
        fecha: ['',Validators.required]
      }
      )
      this.id=this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarUsuario(){
    this.submitted=true;

    if(this.createUsuario.invalid){
      return;
    }

    if (this.id==null) {
      this.agregarUsuario();
    } else {
      this.editarUsuario(this.id);
    }
  }

  agregarUsuario(){
    const usuario:any={
      nombre: this.createUsuario.value.nombre,
      apellido: this.createUsuario.value.apellido,
      documento: this.createUsuario.value.documento,
      fecha: this.createUsuario.value.fecha,
      fechaCreacion:new Date(),
      fechaActualizacion:new Date()
    }
    
    this.loading=true;

    this._usuarioService.agregarUsuario(usuario).then(()=>{
      this.toastr.success('Usuario Registrado', 'Creado!',{positionClass: 'toast-bottom-right'});
      this.loading=false;
      this.router.navigate(['/list-usuarios'])
    }).catch(error =>{
      console.log(error);
      this.loading=false;
      this.toastr.error('Usuario Error Registro', 'Error!',{positionClass: 'toast-bottom-right'});
    });
  }


  editarUsuario(id:string){

    const usuario:any={
      nombre: this.createUsuario.value.nombre,
      apellido: this.createUsuario.value.apellido,
      documento: this.createUsuario.value.documento,
      fecha: this.createUsuario.value.fecha,
      fechaActualizacion:new Date()
    }

    this.loading=false;
    this._usuarioService.actualizarUsuario(id,usuario).then(()=>{
      this.loading=false;
      this.toastr.info('Usuario Editado', 'Editado!',{positionClass: 'toast-bottom-right'});
    });
    this.router.navigate(['/list-usuario'])

  }

  esEditar(){
    this.titulo='Editar Usuario';
    this.titulobtn='Actualizar';
    if(this.id != null){
      this.loading=true;
      this._usuarioService.getUsuario(this.id).subscribe(data =>{
        this.loading=false;
        console.log(data.payload.data()['nombre']);
        this.createUsuario.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          documento: data.payload.data()['documento'],
          fecha: data.payload.data()['fecha'],
        })
      })
    }
  }
 
}
