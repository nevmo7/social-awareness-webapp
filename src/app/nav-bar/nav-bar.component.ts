import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent {

  constructor(private router: Router) {
    
  }

  home(){
    this.router.navigateByUrl("/")
  }

  approve_posts(){
    this.router.navigateByUrl("/approve-posts")
  }

  create_post(){
    this.router.navigateByUrl("/create-post")
  }

  register(){
    this.router.navigateByUrl("/register")
  }

  logout(){
    localStorage.removeItem("jwt");

    this.router.navigateByUrl("/login")
  }
}

