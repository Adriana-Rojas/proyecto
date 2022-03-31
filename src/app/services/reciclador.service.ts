import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecicladorService {

  constructor(private firestore: AngularFirestore) { }


  agregarReciclador(reciclador:any) : Promise <any>{
    return this.firestore.collection('recicladores').add(reciclador);

  }
  getRecicladores():Observable<any>{
    return this.firestore.collection('recicladores', ref => ref.orderBy('fechaActualizacion','asc')).snapshotChanges();
  }

  eliminarReciclador(id :string): Promise<any>{
    return this.firestore.collection('recicladores').doc(id).delete();
  }

  getReciclador(id :string): Observable<any>{
    return this.firestore.collection('recicladores').doc(id).snapshotChanges();
  }

  actualizarReciclador(id:string,data:any): Promise<any>{
    return this.firestore.collection('recicladores').doc(id).update(data);
  }
  
}
