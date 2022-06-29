import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Macsalite } from '../macsalite';
import { MacsaliteService } from '../macsalite.service';

@Component({
  selector: 'app-update-macsalite',
  templateUrl: './update-macsalite.component.html',
  styleUrls: ['./update-macsalite.component.css']
})
export class UpdateMacsaliteComponent implements OnInit {

  id!: number;
  macsalite!: Macsalite;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private macsaliteService: MacsaliteService
  ) { }

  ngOnInit() {
    this.macsalite = new Macsalite();

    this.id = this.route.snapshot.params['id'];
    
    this.macsaliteService.getMacsalite(this.id)
      .subscribe(data => {
        console.log(data)
        this.macsalite = data;
      }, error => console.log(error));
  }

  updateMacsalite() {
    
    this.macsaliteService.updateMacsalite(this.id, this.macsalite)
      .subscribe(data => {
        console.log(data);
        this.macsalite = new Macsalite();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMacsalite();    
  }

  gotoList() {
    this.router.navigate(['/macsalites']);
  }

  list(){
    this.router.navigate(['macsalites']);
  }

}
