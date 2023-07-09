import { Component, OnInit } from '@angular/core';
import { faGear, faIndustry, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    document.querySelector('.cookie-box')?.addEventListener('click', () => {
      document.querySelector('.cookie-component')?.classList.add('show-cookies');
    })
  }

  gearIcon = faGear
  employeesIcon = faUsers
  industry = faIndustry

}
