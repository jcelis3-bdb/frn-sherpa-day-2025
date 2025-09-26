import {CommonModule} from '@angular/common';
import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {

  arrCheckBox = [
    {
      label: "He leído y acepto los Términos y condiciones",
      value: "s",
      isChecked: "false",
    }
  ];

  arrSelectorAction = [
    {
      "icon": "ico-document-check", "title": "Pagaré", "value": "0"
    },
    {
      "icon": "ico-bank-references", "title": "Carta instrucciones pagaré", "value": "1"
    },
    {
      "icon": "ico-documents-services", "title": "Declaración de recursos", "value": "1"
    }
  ]


  constructor(
    private titleService: Title,
  ) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Formulario para conocer y aceptar los documentos de la solicitud');
  }

}
