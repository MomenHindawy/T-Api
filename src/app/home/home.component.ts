import { Component, inject, OnInit } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { IData } from '../idata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  private readonly _DataApiService = inject(DataApiService)


  // displayData: IData[] = [];


  // ngOnInit(): void {

  //   console.log(this._DataApiService);

  // }


  productsData: IData[] = [];

  ngOnInit(): void {
    this._DataApiService.displayData().subscribe({
      next: (res) => {
        console.log(res);
        this.productsData = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
};













