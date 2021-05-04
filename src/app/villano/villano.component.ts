import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
 selectedVillano?: Villano;
 villanos: Villano[]=[
  {id:1, name: "Dr. Octopus",  nivel: 90, namepower: "Cientifico"},
  {id:2, name: "Mojojojo", nivel: 12, namepower: "Armas"},
  {id:3, name: "Magneto", nivel:1000, namepower: "Magnetismo"},
  {id:4, name: "Venon", nivel:70, namepower: "Traje"},
  {id:5, name: "Thanos", nivel:20952, namepower: "Gemas"},
  {id:6, name: "Agatha", nivel:1985, namepower: "Bruja"},
];
  numero = 0;
  base = 5;
  constructor() { }
  ngOnInit() {
  }
  onSelect(villano: Villano): void {
    this.selectedVillano = villano;
  }
  acumulador(valor:number){
    this.numero += valor;
  }
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

}
