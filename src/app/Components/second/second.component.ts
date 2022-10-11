import { Component} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {
 srcs = ["assets/images/pic1.jpg","assets/images/pic2.jpg", "assets/images/pic3.jpg"];
cur = "";
count = 0;
interval:any;
constructor() { 
    this.cur = this.srcs[0] ;
  }

  next(){
    this.count ++ ;
    if(( this.count < this.srcs.length))
      this.cur = this.srcs[this.count] ;
    if(this.count == this.srcs.length)
      this.count -- ; 
         
  
  }
  prev(){

    this.count--;
    if(( this.count >= 0) )
      this.cur = this.srcs[this.count] ;
    
    if(this.count < 0 )
      this.count = 0 ; 
   
  }
  slide(){
    this.interval = setInterval(()=>{
      this.count = (this.count + 1) % this.srcs.length; 
      this.cur = this.srcs[this.count];
  
    }, 2000);
  }

  stop(){
    clearInterval(this.interval);
  }
}
