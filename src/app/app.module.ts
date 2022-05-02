import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { ListRecicladoresComponent } from './components/list-recicladores/list-recicladores.component';
import { CreateRecicladorComponent } from './components/create-reciclador/create-reciclador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { ListOrganizacionesComponent } from './components/list-organizaciones/list-organizaciones.component';
import { ListFundacionComponent } from './components/list-fundacion/list-fundacion.component';
import { CreateFundacionComponent } from './components/create-fundacion/create-fundacion.component';
import { CreateOrganizacionComponent } from './components/create-organizacion/create-organizacion.component';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecicladoresComponent,
    CreateRecicladorComponent,
    NavbarComponent,
    ListUsuariosComponent,
    ListOrganizacionesComponent,
    ListFundacionComponent,
    CreateFundacionComponent,
    CreateOrganizacionComponent,
    CreateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
