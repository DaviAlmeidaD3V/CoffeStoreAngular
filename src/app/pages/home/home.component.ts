import { Component, OnInit } from '@angular/core';
import {  faArrowRight,  } from '@fortawesome/free-solid-svg-icons';
import { Data } from './DataPhrase/PharesCoffee';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phrase: string | undefined;

  constructor(){}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.phrase = randomPhrase();

    function randomPhrase() {
      const Phrase = Data

      const random = Math.floor(Math.random() * Phrase.length);
      
      return Phrase[random];
    }

}
}