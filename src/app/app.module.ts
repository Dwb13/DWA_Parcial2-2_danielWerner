import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MarvelmainComponent } from './components/marvelmain/marvelmain.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ListComponent } from './pages/list/list.component';
 
import { MultiplicarPorPipe } from './pipes/multiplicarpor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MarvelmainComponent,
    RequestsComponent,
    PipesComponent,
    MultiplicarPorPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

