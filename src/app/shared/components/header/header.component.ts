import { Component, Host, OnInit, } from '@angular/core';
import { faAngleUp, faCartShopping, faClose, faCoffee, faCookie, faLaptop, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  styles:  [`.router-link-active { color: #ffa370; }`]
})


export class HeaderComponent implements OnInit {

  constructor(){}


  TopPage() {
    window.scrollTo(0, 0)
  }
  

  ShowCart() {
    let slide = document.querySelector('.side-bar-cart');
    let sidebarBackground = document.querySelector('.sidebar');

    sidebarBackground?.classList.toggle('sidebar-on')

    sidebarBackground?.addEventListener('click', ()=> {
      document.querySelector('.sidebar')?.classList.remove('sidebar-on')
      slide?.classList.remove('cart-on');
    })
    
    slide?.classList.toggle('cart-on')
  }

  ShowUser() {
    let slide = document.querySelector('.side-bar-user');
    let sidebarBackground = document.querySelector('.sidebar');
    
    sidebarBackground?.classList.toggle('sidebar-on')

    sidebarBackground?.addEventListener('click', ()=> {
      document.querySelector('.sidebar')?.classList.remove('sidebar-on')
      slide?.classList.remove('user-on');
    })

    slide?.classList.toggle('user-on')
  }

  CloseSideBar(){
    const slideCart = document.querySelector('.side-bar-cart')!;
    const sidebarBackground = document.querySelector('.sidebar')!;
    const slideUser = document.querySelector('.side-bar-user')!;

    if (sidebarBackground && slideCart && slideUser === null || undefined) {
      alert ('undefined value')
    }
    else {
      ;
    }


    if (slideCart?.className === "side-bar-cart cart-on") {
      sidebarBackground?.classList.remove('sidebar-on')
      slideCart.classList.remove('cart-on')
    }
    if (slideUser?.className === "side-bar-user user-on"){
      sidebarBackground?.classList.remove('sidebar-on')
      slideUser.classList.remove('user-on')
    }
  }

ngAfterViewInit(){}

  ngOnInit() {


    document.querySelector('.cookie-box')?.addEventListener('click', () => {
      document.querySelector('.cookie-component')?.classList.add('show-cookies');
    })

    window.addEventListener('scroll', () => {
      document.querySelector('.header-container')?.classList.toggle('on', window.scrollY > 0);
      document.querySelector('.header-to-top')?.classList.toggle('on', window.scrollY > 0);
    })

    document.querySelector('.header-theme')?.addEventListener('click', () => {document.querySelector('.header-box-themes')?.classList.toggle('on')})
    
  }

  userIcon = faUser
  facebookIcon = faFacebook
  instagramIcon = faInstagram
  twitterIcon = faTwitter
  heartIcon = faHeart
  searchIcon = faSearch
  coffeIcon = faCoffee
  cartIcon = faCartShopping
  topIcon = faAngleUp
  closeIcon =  faClose
  cookieIcon = faCookie
  moonIcon = faMoon
  sunIcon = faSun
  systemIcon = faLaptop
  
}
