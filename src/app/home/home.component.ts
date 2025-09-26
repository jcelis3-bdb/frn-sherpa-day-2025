import {CommonModule} from '@angular/common';
import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {

  arrCheckBox = [
    {
      label: "He leído y acepto los terminos y condiciones",
      value: "s",
      isChecked: "false",
      labelHtml: 'ttt'
    }
  ];
  promissoryNote: 'Pagaré';
  instructionLetter: 'Carta instrucciones pagaré';
  resourceStatement: 'Declaración de recursos';
  icoDocument: 'ico-document-check';
  icoBank: 'ico-bank-references';
  icoDocumentService: 'ico-documents-services';

}
