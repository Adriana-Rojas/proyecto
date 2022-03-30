import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RecicladorService } from 'src/app/services/reciclador.service';

@Component({
  selector: 'app-list-recicladores',
  templateUrl: './list-recicladores.component.html',
  styleUrls: ['./list-recicladores.component.css']
})
export class ListRecicladoresComponent implements OnInit {
  
  recicladores: any[]=[];

  constructor(private _recicladorService: RecicladorService) {
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
        console.log(element.payload.doc.id);// obtengo id
        console.log(element.payload.doc.data());//obtengo datos

        this.recicladores.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
      console.log(this.recicladores);//obtengo datos
    });   

  }

}
