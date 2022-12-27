import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi:number;
  resultado:string;
  interpretacion:string;
constructor(private router:ActivatedRoute){
  this.resultado=''
  this.interpretacion=''
  this.bmi=Number(router.snapshot.paramMap.get('valor'))
console.log(this.bmi)
 
}
ngOnInit(): void {
 
  this.getResultado()
}
getResultado(){
  if(this.bmi>=25){
this.resultado='Exceso de peso';
this.interpretacion='Tienes un peso corporal superior normal, Intente hacer mas ejercicio'
  }else if(this.bmi>=18.5){
    this.resultado='Normal';
    this.interpretacion='Tienes un peso corporal normal'
  }else{
    this.resultado='Bajo';
    this.interpretacion='Tienes un peso corporal bajo'
  }

}
}
