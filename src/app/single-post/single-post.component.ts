import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  
  public id: any;

  public post: any;
  public dateFormatted: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(){
    this.getSinglePost(this.id)
  }

  

  getSinglePost(postId: any) {
    
    this.http.get("http://localhost:8080/userpost/getsinglepost/" + postId).subscribe(
        (data) => {
          if (data != null) {
            this.post = data;

            const regex = /^(\d{4}-\d{2}-\d{2})T/;

            this.dateFormatted = this.post.dateCreated.match(regex);
            
            console.log(this.post.dateCreated)
            console.log("Date " + this.dateFormatted)
          }
        },
      (   error: any) => {
          this.router.navigateByUrl("/notfound")
          alert("There was an error: " + error)
        }
    );
  }
}
