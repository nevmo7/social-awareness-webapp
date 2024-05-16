import { Component } from '@angular/core';
import { IssueCardComponent } from '../utils/issue-card/issue-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-card-group',
  templateUrl: './issue-card-group.component.html',
  styleUrls: ['./issue-card-group.component.css'],
  imports: [IssueCardComponent, MatGridListModule, CommonModule],
  standalone:true
})
export class IssueCardGroupComponent {

  socialIssues:any = [];
  ngOnInit(){
    if(localStorage.getItem('jwt') != null){
      this.getSocialIssues()
    }else {
      this.router.navigateByUrl("/")
    }
    
  }
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getSocialIssues(){
    this.http.get("http://localhost:8080/userpost/getallpost").subscribe(
        data => {
          console.log(data)
          this.socialIssues = data;
        },
        error => {
          console.log(error)
          
        }
      );
  }
}
