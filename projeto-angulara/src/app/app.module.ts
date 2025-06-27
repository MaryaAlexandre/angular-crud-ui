import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//so pra dar pull request
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  { path: '', component: ProdutoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    InputTextModule,
    CheckboxModule,
    TableModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
