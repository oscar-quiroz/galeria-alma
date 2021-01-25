import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})




export class CardComponent implements OnInit {

 

  @Input() img:string = "";
  @Input() valor:string = "";

  @Output() mostrar:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDatos(){
    console.log(this.img)
    this.mostrar.emit(this.img );
  }

}

