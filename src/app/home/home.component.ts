import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterContentInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  public isAlertOpen:boolean = false;
  constructor() {}

  ngOnInit(){
    
    setTimeout(() => { 
      this.isAlertOpen = true
    }, 5000)
  }

  openAlert(){
    this.isAlertOpen = true;
  }

  closeAlert(){
    this.isAlertOpen = false;
  }

}
