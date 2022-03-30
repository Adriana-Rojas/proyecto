import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RecicladorService } from 'src/app/services/reciclador.service';

@Component({
  selector: 'app-list-recicladores',
  templateUrl: './list-recicladores.component.html',
  styleUrls: ['./list-recicladores.component.css']
})
export class ListRecicladoresComponent implements OnInit {
  
  recicladores: any[]=[];

  constructor(private _recicladorService: RecicladorService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getRecicladores()
  }
  
  getRecicladores(){
    this._recicladorService.getRecicladores().subscribe(data => {
      this.recicladores=[];
      //data.sort();
      //data.reverse();
      data.forEach((element:any)=> {
       // console.log(element.payload.doc.id);// obtengo id
       // console.log(element.payload.doc.data());//obtengo datos

        this.recicladores.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
    //  console.log(this.recicladores);//obtengo datos
    });   

  }

  eliminarReciclador(id:string){
    this._recicladorService.eliminarReciclador(id).then(()=>{
      this.toastr.warning('Reciclador Borrado', 'Eliminado!',{positionClass: 'toast-bottom-right'});
    }).catch(error =>{
      console.log(error);
      this.toastr.error('Error al Borrar', 'Error!',{positionClass: 'toast-bottom-right'});
    });
  }

}
