import { Component, OnInit } from '@angular/core';


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
    this.phrase = WordOfTheDay();

    function WordOfTheDay() {

      const Data = [
        "Today's good mood is sponsored by coffee",
        "Caffeine- It maintains my sunny personality",
        "Three cups of coffee a day keeps the doctor away",
        "Science may never come up with a better office communication system than the coffee break",
        "A mathematician is a device for turning coffee into theorems",
        "The most dangerous drinking game is seeing how long I can go without coffee",
        "I like coffee because it gives me the illusion that I might be awake",
        "If you are not coffee, chocolate or bacon, I'm going to need you to go away"
      ]

      const Phrase = Data

      const random = Math.floor(Math.random() * Phrase.length);
      
      return Phrase[random];
    }

  }
}