import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, CommonModule],
})

export class LoginComponent {

  host: string = "http://pww.ddns.net"
  form: FormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
  });

  ngOnInit(){
    if(localStorage.getItem('jwt') != null){
      this.router.navigateByUrl("/")
    }
  }
  
  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  submit() {
    if (this.form.valid) {
      // this.submitEM.emit(this.form.value);

      console.log(this.form.value);
      
      this.http.post(this.host + "/signin", this.form.value, {responseType: "text"}).subscribe(
        (data) => {
          if (data != null) {
            const jwtToken = JSON.parse(data);
            localStorage.setItem('jwt', jwtToken.jwt);
            this.router.navigateByUrl("/");
          }
        },
        error => {
          console.log(error)
          this.error = error.error;
          
        }
      );
       
    }else{
      this.error = "Please check input fields highlighted red"
    }
  }
  @Input() error: string | null = "";

  @Output() submitEM = new EventEmitter();
}

