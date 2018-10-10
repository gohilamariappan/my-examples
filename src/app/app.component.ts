import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topNav:boolean=false;
  constructor(private router: Router) {
    this.topNav=JSON.parse(localStorage.getItem('topNav'));
  }
  ngOnInit() {
    this.topNav=JSON.parse(localStorage.getItem('topNav'));
  }
  logout()
  {
    localStorage.setItem("topNav", JSON.stringify(false));
    window.location.reload();
    this.router.navigate(['login']);
  }
  navO()
  {
    this.router.navigate(['organizational-goals']);
  }
  navP()
  {
    this.router.navigate(['project-goals']);
  }
  navT()
  {
    this.router.navigate(['technical-goals']);
  }
  navI()
  {
    this.router.navigate(['individual-goals']);
  }
  fomthd()
  {
    this.router.navigate(['organizational-goals-feedback']);
  }
  fpmthd()
  {
    this.router.navigate(['project-goals-feedback']);
  }
  ftmthd()
  {
    this.router.navigate(['technical-goals-feedback']);
  }
  fimthd()
  {
    this.router.navigate(['individual-goals-feedback']);
  }
  famthd()
  {
    this.router.navigate(['all-goals-feedback']);
  }
  fempmthd()
  {
    this.router.navigate(['emp']);
  }
  fallmthd()
  {
    this.router.navigate(['employeeallgoals']);
  }
  view1()
  {
    this.router.navigate(['view']);
  }
  repmthd1()
  {
    this.router.navigate(['report-self']);
  }

  viewsubemp()
  {
    this.router.navigate(['viewsub']);
  }
  empmthd()
  {
    this.router.navigate(['empadd']);
  }
  relmthd()
  {
    this.router.navigate(['release-goals']);
  }
  repmthd()
  {
    this.router.navigate(['reports']);
  }
 
  appmthd()
  {
    this.router.navigate(['appraisal']);
  }
  hismthd()
  {
    this.router.navigate(['hiscom']);
  }
  historymthd()
  {
    this.router.navigate(['history-performance']);
  }
  hom()
  {
    this.router.navigate(['home']);
  }
  }
  
