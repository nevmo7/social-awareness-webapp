import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-posts',
  templateUrl: './approve-posts.component.html',
  styleUrls: ['./approve-posts.component.css']
})
export class ApprovePostsComponent {

  jwtToken = localStorage.getItem('jwt');

  allpost: any;

  isadmin: boolean | any;
  
  ngOnInit(){

    if(this.jwtToken == null){      
      this.router.navigateByUrl("/login")
    }else{
      this.getAllPosts();
    }
  }

  constructor(
    private router: Router,
    private http : HttpClient
  ) { }

  approve(id: any){

    console.log(id)
    this.http.post("http://localhost:8080/userpost/authorizepost/true/"+id, {"jwt": this.jwtToken}, {responseType: "text"}).subscribe(
        (data) => {
          alert(data)
        },
        error => {
          console.log(error)
        }
    );
  }
  
  reject(id: any){
    this.http.post("http://localhost:8080/userpost/authorizepost/false/"+id, {"jwt": this.jwtToken}, {responseType: "text"}).subscribe(
        (data) => {
          alert(data)
        },
        error => {
          console.log(error)
        }
    );
  }

  getAllPosts() {
    
    this.http.post("http://localhost:8080/userpost/getallpost", {"jwt": this.jwtToken}).subscribe(
        (data) => {
          if (data != null) {
            this.allpost = data;
            console.log(data);
          }
        },
        error => {
          console.log(error)
        }
    );
  }
}

