import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad:number =0;
  peso:number =0;
  altura:number=0
  sexo='Masculino'
  constructor(private router:Router){

  }
 sumarEdad():void{
   this.edad+=1
 }
 restarEdad():void{
  this.edad-=1
 }
 sumarPeso():void{
  this.peso+=1
 }
 restarPeso():void{  
  this.peso-=1
 }
 cambiarAltura(event:any):void{
  console.log(event.target.value)
  this.altura=event.target.value
  
 
}
masculino(){
this.sexo='Masculino'
}
femenino(){
this.sexo='Femenino'
}
calcularbmi(){

const BMI=this.peso/Math.pow(this.altura/100,2)
this.router.navigate(['/resultado',BMI.toFixed(1)])
console.log()
}
}
