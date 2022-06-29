import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Macsalite } from '../macsalite';
import { MacsaliteService } from '../macsalite.service';

@Component({
  selector: 'app-macsalite-list',
  templateUrl: './macsalite-list.component.html',
  styleUrls: ['./macsalite-list.component.css']
})
export class MacsaliteListComponent implements OnInit {
  
  macsalites!: Macsalite[];
  macsalite!: Macsalite;
  firstName!: any;
  


  constructor(
    private macsaliteService: MacsaliteService,
    private router: Router
  ) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.macsaliteService.getMacsalitesList().subscribe(
      data => {
        console.log(data);
        this.macsalites = data;
      }
    );
  }

  deleteMacsalite(id: number) {
    this.macsaliteService.deleteMacsalite(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  macsaliteDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateMacsalite(id: number){
    this.router.navigate(['update', id]);
  }

  checkSBConnection(){
    this.macsaliteService.getSpringBootConnection();
  }

  search(){
    if(this.firstName===""){
      this.ngOnInit();
      
    }else{
      this.macsalites = this.macsalites.filter(res =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  key: string = 'firstName';
  reverse: boolean = false;
  p: number = 1;
  sort(){
    this.reverse = !this.reverse;
  }

}
