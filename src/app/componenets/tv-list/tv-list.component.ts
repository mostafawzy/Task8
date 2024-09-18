import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css'
})
export class TvListComponent implements OnInit{

  tvList:any[]=[];
  constructor(private tvServ:TvService){}
  ngOnInit() {
    this.tvServ.getItemList().subscribe((list)=>{
      this.tvList=list.results
      console.log(list);
      
    })
  }

}
