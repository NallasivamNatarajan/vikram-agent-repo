import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  submitted!: true;
  title = 'VIKRAM AGENTS';
  urlString !:string;

  constructor() { }



  ngOnInit(): void {
    }
  
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
  };
    

    








}
