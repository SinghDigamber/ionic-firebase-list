import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-make',
  templateUrl: './make.page.html',
  styleUrls: ['./make.page.scss'],
})

export class MakePage implements OnInit {
  form: FormGroup;

  constructor(
    private apiService: UserService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }

  onFormSubmit() {
    if (!this.form.valid) {
      return false;
    } else {
      this.apiService.createUser(this.form.value).then(res => {
        this.form.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
