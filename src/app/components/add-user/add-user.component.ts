import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user: User = {
    name: '',
    email: '',
  };
  submitted = false;

  constructor(private UserService: UserService) { }

  saveUser(): void {
    const data = {
      title: this.user.name,
      description: this.user.email
    };

    this.UserService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
    };
  }

}