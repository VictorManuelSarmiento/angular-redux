import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
    ],
    declarations: [
    ],
    providers: [
    ]
})
export class SharedModule { }

// Importe modulos requeridos por los de mas Modulos de la APP (CommonModule, FormsModule ...)
// Declarar componentes, directivas y pipes comunes a los de mas Modulos de la APP.
// Evite proporcionar servicios en este módulo
