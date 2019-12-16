import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})

export class EditPage implements OnInit {
  userForm: FormGroup;
  id: any;

  constructor(
    private apiService: UserService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.apiService.getUser(this.id).valueChanges().subscribe(res => {
      this.userForm.setValue(res);
    });
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }

  onUpdateForm() {
    this.apiService.updateUser(this.id, this.userForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}