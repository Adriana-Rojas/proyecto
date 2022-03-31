import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecicladorService } from 'src/app/services/reciclador.service';

@Component({
  selector: 'app-create-reciclador',
  templateUrl: './create-reciclador.component.html',
  styleUrls: ['./create-reciclador.component.css']
})
export class CreateRecicladorComponent implements OnInit {
  createReciclador: FormGroup;
  submitted =false;
  loading =false;
  id: string|null;
  titulo='Agregar Reciclador';

  constructor( private fb :FormBuilder,
              private _recicladorService: RecicladorService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute:ActivatedRoute) { 
      this.createReciclador=this.fb.group({
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

  agregarEditarReciclador(){
    this.submitted=true;

    if(this.createReciclador.invalid){
      return;
    }

    if (this.id==null) {
      this.agregarReciclador();
    } else {
      this.editarReciclador(this.id);
    }
  }

  agregarReciclador(){
    const reciclador:any={
      nombre: this.createReciclador.value.nombre,
      apellido: this.createReciclador.value.apellido,
      documento: this.createReciclador.value.documento,
      fecha: this.createReciclador.value.fecha,
      fechaCreacion:new Date(),
      fechaActualizacion:new Date()
    }
    
    this.loading=true;

    this._recicladorService.agregarReciclador(reciclador).then(()=>{
      this.toastr.success('Reciclador Registrado', 'Creado!',{positionClass: 'toast-bottom-right'});
      this.loading=false;
      this.router.navigate(['/list-recicladores'])
    }).catch(error =>{
      console.log(error);
      this.loading=false;
      this.toastr.error('Reciclador Error Registro', 'Error!',{positionClass: 'toast-bottom-right'});
    });
  }


  editarReciclador(id:string){

    const reciclador:any={
      nombre: this.createReciclador.value.nombre,
      apellido: this.createReciclador.value.apellido,
      documento: this.createReciclador.value.documento,
      fecha: this.createReciclador.value.fecha,
      fechaActualizacion:new Date()
    }

    this.loading=false;
    this._recicladorService.actualizarReciclador(id,reciclador).then(()=>{
      this.loading=false;
      this.toastr.info('Reciclador Editado', 'Editado!',{positionClass: 'toast-bottom-right'});
    });
    this.router.navigate(['/list-recicladores'])

  }

  esEditar(){
    this.titulo='Editar Reciclador';
    if(this.id != null){
      this.loading=true;
      this._recicladorService.getReciclador(this.id).subscribe(data =>{
        this.loading=false;
        console.log(data.payload.data()['nombre']);
        this.createReciclador.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          documento: data.payload.data()['documento'],
          fecha: data.payload.data()['fecha'],
        })
      })
    }
  }
 
}
