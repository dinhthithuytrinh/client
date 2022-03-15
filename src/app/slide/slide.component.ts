import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {


  authorweeks: AuthorWeeks[] =[
    {
      image:'higashinokeigo.jpg',
      name:'Keigo Higashino',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
    {
      image:'imag-01.jpg',
      name:'Nguyễn Ngọc Tư',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
    {
      image:'imag-02.jpg',
      name:'Jordan Peterson',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
    {
      image:'imag-03.jpg',
      name:'Lý Lan',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
    {
      image:'imag-04.jpg',
      name:'Oda Eiichiro',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
    {
      image:'imag-05.jpg',
      name:'Nhất Linh',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
    {
      image:'imag-06.jpg',
      name:'Vũ Trọng Phụng',
      description:'Keigo Higashino is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013.'
    },
  ]
   
  

  constructor() { }

  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true,
    "autoplay": true,

  };  
  ngOnInit(): void {
  }

}
class AuthorWeeks {
  image : string;
  name : string;
  description : string;
}