import { Component, OnInit, } from '@angular/core';
import { faAngleUp, faCartShopping, faClose, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
  document.querySelector('.header-container')?.classList.toggle('on', window.scrollY > 0);
  document.querySelector('.header-to-top')?.classList.toggle('on', window.scrollY > 0);

}


ngAfterViewInit(){}

  ngOnInit() {
    $('#ShowBoxMenu').hover(function(){
    $('#drop').toggleClass('dropdown-open');
    })
    $('.dropdown-content').hover(function () {
      $('#drop').toggleClass('dropdown-open');
    })
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
  
}
