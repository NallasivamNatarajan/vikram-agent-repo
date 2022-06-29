import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Macsalite } from '../macsalite';
import { MacsaliteService } from '../macsalite.service';

@Component({
  selector: 'app-macsalite-details',
  templateUrl: './macsalite-details.component.html',
  styleUrls: ['./macsalite-details.component.css']
})
export class MacsaliteDetailsComponent implements OnInit {

  macsalite: Macsalite = new Macsalite();
  id!: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private macsaliteService: MacsaliteService
  ) { }

  ngOnInit(): void {
    this.macsalite = new Macsalite();

    this.id = this.route.snapshot.params['id'];
    
    this.macsaliteService.getMacsalite(this.id)
      .subscribe(data => {
        console.log(data)
        this.macsalite = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['macsalites']);
  }


}
