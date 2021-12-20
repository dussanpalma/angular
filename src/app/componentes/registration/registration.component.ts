import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.getAuth().subscribe(auth => {
        if(auth){
          this.router.navigate(['/']);
        }
      })
    }

    registro(){
      this.loginService.registrarse(this.email, this.password)
        .then( res => {
          this.router.navigate(['/']);
        })
        .catch(error => {
          this.flashMessages.show( error.message, {
            cssClass: 'alert-danger', timeout: 4000
          });
        });
    }

}
