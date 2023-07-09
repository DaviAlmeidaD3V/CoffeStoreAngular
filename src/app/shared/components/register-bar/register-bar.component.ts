import { Component, OnInit } from '@angular/core';
import { faClose, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-bar',
  templateUrl: './register-bar.component.html',
  styleUrls: ['./register-bar.component.scss']
})
export class RegisterBarComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {}

  closeIcon = faClose
  coffeIcon = faCoffee

  CloseRegisterBar() {
    document.querySelector('.register-component')?.classList.remove('on');
  }

  LoadRegisterBar() {
    document.querySelector('.register-component')?.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.register-component')?.classList.add('on')
    })
  }

}
