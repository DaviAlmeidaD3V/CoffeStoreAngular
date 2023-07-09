import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {}

  phoneIcon = faPhone
  whatsAppIcon = faWhatsapp
  openingIcon = faClock
  envelopeIcon = faEnvelope

}
