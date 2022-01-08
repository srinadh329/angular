import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  search(event:any){
    let data = event.target.value;
    console.log(data)
    if(data != ""){
      this.router.navigate(['/home/data'],data)
    }
    
  }
}
