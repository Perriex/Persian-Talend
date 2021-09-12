import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public username!:string | null;
  public firstName:string="parmida";
  public lastName:string="khani"
  constructor() {}

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
  }
  public myFunction() {
    // document.getElementById("myDropdown").classList.toggle("show");
  }
}
