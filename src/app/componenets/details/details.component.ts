
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
  import { TvService } from '../../services/tv.service';
  import { CommonModule, NgClass } from '@angular/common';
  import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule ,NgClass],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  itemId!: number;
  itemDetails: any = {};

  constructor(private route: ActivatedRoute, private tvServ: TvService) {}


  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.tvServ.getItemById(this.itemId).subscribe((details) => {
      this.itemDetails = details;
    });
  }
}
