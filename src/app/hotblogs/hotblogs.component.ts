import { Component, OnInit } from '@angular/core';
import { ListBlogs } from "./hotblogs";
@Component({
  selector: 'app-hotblogs',
  templateUrl: './hotblogs.component.html',
  styleUrls: ['./hotblogs.component.css']
})
export class HotblogsComponent implements OnInit {

  listblog: ListBlogs[];
  constructor() { }

  ngOnInit(): void {
    this.listblog = 
    [
      new ListBlogs('Em sẽ đến cùng cơn mưa', 'romace' , 'trinhxu', 'blog0.jpg', '“Em sẽ đến cùng cơn mưa” câu chuyện của người đàn ông đánh mất hạnh phúc vào tay thần chết. Nhưng rồi rốt cục anh cũng tìm lại chính mình nhờ phép màu tưởng chừng chỉ có trong cổ tích: Đó là gặp và yêu lại Mio-người vợ đầu ắp tay gối đã qua đời một năm- trong cơn mưa tháng 6.', 4,5000, 8456),
      new ListBlogs('Án mạng trên chuyến tàu tốc hành Phương Đông', 'mistery' , 'nguoidung1', 'blog1.jpg','“Tác phẩm nói về vụ án mạng kỳ lạ xảy ra trên chuyến tàu tốc hành Phương Đông chạy từ Istanbul về Calais mà thám tử Hercule Poirot tình cờ có mặt. Đây được coi là một trong những tiểu thuyết nổi tiếng nhất của Agatha Christie và nó đã hai lần được chuyển thể thành phim và một video game.',  3, 2000, 3456),
      new ListBlogs('Hako no naka', 'boylove', 'nguoidung1', 'hako.jpg','Khóc',  5, 300, 56),
      new ListBlogs('Jujutsu kaisen', 'manga' , 'wibu', 'blog3.jpg','Wibu never die',  5, 300, 56),
     
    ]
  }
  slideConfig = {  
    "slidesToShow": 4,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true,
    "autoplay": true,

  };
}
