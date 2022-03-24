import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-recicladores',
  templateUrl: './list-recicladores.component.html',
  styleUrls: ['./list-recicladores.component.css']
})
export class ListRecicladoresComponent implements OnInit {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();

  }

  ngOnInit(): void {
  }

}
