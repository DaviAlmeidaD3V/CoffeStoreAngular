import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {


    const observer = new IntersectionObserver((entries => {
      entries.forEach((entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('on')
        }
        else {
          entry.target.classList.remove('on')
        }
      }));
    }))

    const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
    hiddenElementsLeft.forEach((e) => observer.observe(e))

    const hiddenElementsRight = document.querySelectorAll('.hidden-right');
    hiddenElementsRight.forEach((e) => observer.observe(e))

    const hiddenElementsTop = document.querySelectorAll('.hidden-top');
    hiddenElementsTop.forEach((e) => observer.observe(e))

    const hiddenElementsDown = document.querySelectorAll('.hidden-down');
    hiddenElementsDown.forEach((e) => observer.observe(e))


  }

}
