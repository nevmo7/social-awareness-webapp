import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  host: string = "http://pww.ddns.net"

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {
  
  }

  


  submit() {
    var options = {
      headers: new HttpHeaders({
         'Accept':'text/plain'
      }),
      'responseType': 'text' as 'json'
   }
    if (this.form.valid) {
      // this.submitEM.emit(this.form.value);

      console.log(this.form.value);
      
      this.http.post(this.host + "/signup", this.form.value, {responseType: 'text'}).subscribe(
        data => {
          this.error = null
          this.success = data
          console.log(data)

        },
        error => {
          this.success = null
          this.error = error.error;
          console.log(error)
          
        }
      );
       
    }else{
      this.error = "Please check input fields highlighted red"
    }
  }
  @Input() error: string | null = "";
  @Input() success: string | null = "";

  @Output() submitEM = new EventEmitter();
}
