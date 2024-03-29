import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VscomputerComponent } from './vscomputer/vscomputer.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { PieceComponent } from './piece/piece.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { BoardrepComponent } from './boardrep/boardrep.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    VscomputerComponent,
    BoardComponent,
    TileComponent,
    PieceComponent,
    DashboardComponent,
    LibraryComponent,
    BoardrepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
