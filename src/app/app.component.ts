import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Awareness - Advanced Consulting Services';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  

  ngOnInit(){
    const jwtToken = localStorage.getItem('jwt');

    if(jwtToken){
      this.checkJwtExpired(jwtToken);
    }else {
      this.router.navigateByUrl("/login");
    }
  }

  checkJwtExpired(jwt: String){
    this.http.post("http://localhost:8080/userprofile/checktoken", {"jwt": jwt}, {responseType: "text"}).subscribe(
        (data) => {
          if (data != null) {
            console.log(data);
            
          }
        },
        error => {
          console.log(error)
          localStorage.removeItem('jwt');

          this.router.navigateByUrl("/login");
          
        }
    );

  }
}
