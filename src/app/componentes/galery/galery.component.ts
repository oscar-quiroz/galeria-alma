import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  images:any;

  constructor() { 
    
    this.images = [
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103413265_2683109511958138_7449347726880263576_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=xxZooZBfdBQAX-plJaC&tp=1&oh=e4bf815f6a6ebf52c263a08cf2d255c6&oe=6037B7C6",
        "valor": "55000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
          "valor": "40000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103413265_2683109511958138_7449347726880263576_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=xxZooZBfdBQAX-plJaC&tp=1&oh=e4bf815f6a6ebf52c263a08cf2d255c6&oe=6037B7C6",
        "valor": "55000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },{
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },{
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      },
      {
        "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
        "valor": "40000"
      }
  ]
  }

  ngOnInit(): void {
  }

}
