import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  constructor(){}

  ngAfterViewInit(): void {

      const CookiesButtons = document.querySelectorAll('.cookies-btn');
  
      CookiesButtons.forEach(button => {
        button.addEventListener('click', () => {
          document.querySelector('#cookie')?.classList.remove('show-cookies');
        })
  
        if (button.id == 'acceptBtn'){ 
          document.cookie = "cookieBy= CoffeStore; max-age=" + 60 * 60 * 24 * 30;
        }
        else {
          button.addEventListener('click', () => {
            document.querySelector('#cookie')?.classList.remove('show-cookies');
          })
        }
      })
  
  }
  

  @HostListener('window:load')
  onLoad() {
    document.querySelector('#cookie')?.classList.add('show-cookies')!;
  }


}
