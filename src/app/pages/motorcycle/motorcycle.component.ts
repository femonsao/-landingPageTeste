import { Component } from '@angular/core';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.scss'],
})
export class MotorcycleComponent {
  public motocycles = [
    {
      id: 1,
      name: 'Scout',
      img: 'assets/img/slide-1.jpg',
      price: "10'999,00",
    },
    {
      id: 2,
      name: 'Chief',
      img: 'assets/img/slide-2.jpg',
      price: "14'499,00",
    },
    { id: 4, name: 'FTR', img: 'assets/img/slide-3.jpg', price: "13'499,00" },
    {
      id: 4,
      name: 'FTR',
      img: 'assets/img/slide-4.jpg',
      price: "13'499,00",
    },
  ];
}
