import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Imagen} from '../../interfaces/IBrallet'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})




export class CardComponent implements OnInit {

  
  @Input() img:string = "";
  @Input() valor:string = "";

  imagenNueva:Imagen = {
    img: '',
    valor:''
  }

  @Output() imagen:EventEmitter<Imagen> = new EventEmitter<Imagen>();

  constructor() { }

  ngOnInit(): void {
  }

  obtenerImagen(){

    this.imagenNueva= {
      img: this.img,
      valor:this.valor
    }
    //console.log(this.imagenNueva.valor, this.imagenNueva.img)
    this.imagen.emit( this.imagenNueva )
  }



}

