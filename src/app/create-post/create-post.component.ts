import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreatePostComponent {

  jwtToken = localStorage.getItem('jwt');

  form: FormGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      contentMedia: new FormControl('', [Validators.required]),
      jwtToken: new FormControl(this.jwtToken)
  });

  createpost() {
    console.log(this.form.value);
    
    this.http.post("http://localhost:8080/userpost/createpost", this.form.value, {responseType: "text"}).subscribe(
        (data) => {
          if (data != null) {
            console.log(data)
            this.success = data
          }
        },
        error => {
          console.log(error)
          this.error = error
        }
    );
  }

  ngOnInit(){
    if(this.jwtToken == null){      
      this.router.navigateByUrl("/login")
    }
  }

  constructor(
    private router: Router,
    private http : HttpClient
  ) { }

  @Input() error: string | null = "";
  @Input() success: string | null = "";
}
