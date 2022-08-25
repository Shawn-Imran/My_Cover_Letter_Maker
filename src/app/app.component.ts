import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coverLetter';
  now = new Date();
  tempNow = this.now.toDateString();
  date = this.tempNow.substr(4);
  form = new FormGroup({
    cname: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.form.value);
    console.log(this.date);
  }

  
}
