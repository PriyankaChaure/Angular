import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Welcome } from './Welcome/welcome.component';
import { Hello } from './Hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    Welcome,
    Hello
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [Hello]
})
export class AppModule { }
