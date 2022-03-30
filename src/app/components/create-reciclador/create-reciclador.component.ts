import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor( private fb :FormBuilder,
              private _recicladorService: RecicladorService,
              private router: Router,
              private toastr: ToastrService) { 
      this.createReciclador=this.fb.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        documento: ['',Validators.required],
        fecha: ['',Validators.required]
      }
      )
  }

  ngOnInit(): void {
  }

  agregarReciclador(){
    this.submitted=true;

    if(this.createReciclador.invalid){
      return;
    }
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

 
}
