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
  registrationForm: FormGroup;
  fieldTextType = false;
  repeatFieldTextType = false;
  createReciclador: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Reciclador';
  titulobtn = 'Agregar';

  hide: boolean = true;
  visible = false;
toggle(event){
    this.visible = !this.visible;
}

  myFunction() {
    this.hide = !this.hide;
  }

  constructor(private fb: FormBuilder,
    private _recicladorService: RecicladorService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createReciclador = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      fecha: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    }
    )
    this.registrationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }


  ngOnInit(): void {
    this.esEditar();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;

    this.fieldTextType = true;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = true;
    this.repeatFieldTextType = !this.repeatFieldTextType;
    
   
  }

  agregarEditarReciclador() {
    this.submitted = true;

    if (this.createReciclador.invalid) {
      return;
    }

    if (this.id == null) {
      this.agregarReciclador();
    } else {
      this.editarReciclador(this.id);
    }
  }

  agregarReciclador() {
    const reciclador: any = {
      nombre: this.createReciclador.value.nombre,
      apellido: this.createReciclador.value.apellido,
      documento: this.createReciclador.value.documento,
      fecha: this.createReciclador.value.fecha,
      telefono: this.createReciclador.value.telefono,
      correo: this.createReciclador.value.correo,
      contrasena: this.createReciclador.value.contrasena,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    this.loading = true;

    this._recicladorService.agregarReciclador(reciclador).then(() => {
      this.toastr.success('Reciclador Registrado', 'Creado!', { positionClass: 'toast-bottom-right' });
      this.loading = false;
      this.router.navigate(['/list-recicladores'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Reciclador Error Registro', 'Error!', { positionClass: 'toast-bottom-right' });
    });
  }


  editarReciclador(id: string) {

    const reciclador: any = {
      nombre: this.createReciclador.value.nombre,
      apellido: this.createReciclador.value.apellido,
      documento: this.createReciclador.value.documento,
      fecha: this.createReciclador.value.fecha,
      telefono: this.createReciclador.value.telefono,
      correo: this.createReciclador.value.correo,
      contrasena: this.createReciclador.value.contrasena,
      fechaActualizacion: new Date()
    }

    this.loading = false;
    this._recicladorService.actualizarReciclador(id, reciclador).then(() => {
      this.loading = false;
      this.toastr.info('Reciclador Editado', 'Editado!', { positionClass: 'toast-bottom-right' });
    });
    this.router.navigate(['/list-recicladores'])

  }

  esEditar() {
    this.titulo = 'Editar Reciclador';
    this.titulobtn = 'Actualizar';
    if (this.id != null) {
      this.loading = true;
      this._recicladorService.getReciclador(this.id).subscribe(data => {
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.createReciclador.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          documento: data.payload.data()['documento'],
          fecha: data.payload.data()['fecha'],
          telefono: data.payload.data()['telefono'],
          correo: data.payload.data()['correo'],
          contrasena: data.payload.data()['contrasena'],
        })
      })
    }
  }



}
