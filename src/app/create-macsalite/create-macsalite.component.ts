import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Macsalite } from '../macsalite';
import { MacsaliteService } from '../macsalite.service';

@Component({
  selector: 'app-create-macsalite',
  templateUrl: './create-macsalite.component.html',
  styleUrls: ['./create-macsalite.component.css']
})
export class CreateMacsaliteComponent implements OnInit {
  
  macsalite: Macsalite = new Macsalite();
  submitted = false;
  constructor(
    private macsaliteService: MacsaliteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newMacsalite(): void {
    this.submitted = false;
    this.macsalite = new Macsalite();
  }

  save() {
    this.macsaliteService
    .createMacsalite(this.macsalite).subscribe(data => {
      console.log(data)
      this.macsalite = new Macsalite();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/macsalites']);
  }

  list(){
    this.router.navigate(['macsalites']);
  }

}
