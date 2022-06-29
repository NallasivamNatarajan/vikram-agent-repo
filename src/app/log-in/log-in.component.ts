import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Macsalite } from '../macsalite';
import { MacsaliteService } from '../macsalite.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  macsalite: Macsalite = new Macsalite();
  userName!: string;
  password!: string;
  submitted!: true;


  constructor(
    private macsaliteService: MacsaliteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.submitted;
  }

  login(userName:string,password:string){
    this.macsaliteService.getValidUser(userName,password)
    .subscribe(data => {
      if(data.valid){
        this.list();
      }
    }, error => {
      alert('Invalid Credentials!');
  })
      }
errorMessage(){
  alert('Invalid Credentials!');
}
      list(){
        this.router.navigate(['macsalites']);
      }
}
