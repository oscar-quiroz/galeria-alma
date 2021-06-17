import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/interfaces/IBrallet';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  images:any;


  imagen:string = '';

  
  valorB:string = ''
  texto:string ='';

  constructor() { 

	this.texto = "Precio: "
    


    this.images = [
		{
			"img": "https://i.ibb.co/CHCJhRn/1.jpg",
			"valor": "55.000"
		  },
		  {
			  "img": "https://i.ibb.co/JCJ2dvy/2.jpg",
				"valor": "40.000"
		  },
		  {
			  "img": "https://i.ibb.co/Nyd1tFY/3.jpg",
				"valor": "70.000"
		  },
		  {
			  "img": "https://i.ibb.co/7RYYPsg/4.jpg",
				"valor": "45.000"
		  },
		  {
			  "img": "https://i.ibb.co/Zhb2RX3/5.jpg",
				"valor": "55.000"
		  },
		  {
			  "img": "https://i.ibb.co/qCWk91K/6.jpg",
				"valor": "45.000"
		  },
		  {
			  "img": "https://i.ibb.co/5K7xbdH/7.jpg",
				"valor": "45.000"
		  },
		  {
			"img": "https://i.ibb.co/zX5CbQx/8.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/KjfXjmC/9.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/yqrq3gL/10.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/6X87mK9/11.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/LxLJQPj/13.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/z6q0XS4/13.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/bQ0Cyqz/14.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/Q8CXKc8/15.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/1XqnNhN/16.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/Lr9hZ7H/17.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/JqPJxSJ/18.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/y5HPrt4/19.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/7WFvbK7/20.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/k3R90t7/21.jpg",
			  "valor": "45.000"
		},
		{
			"img": "https://i.ibb.co/sC2znzN/22.jpg",
			  "valor": "45.000"
		}

	  
  ]
  }

  ngOnInit(): void {
  }

  enviarImagen( img:Imagen ){
	  this.imagen= img.img;
	  this.valorB= img.valor;
  }

}
