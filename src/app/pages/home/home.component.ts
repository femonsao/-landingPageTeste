import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { APPEARD, APPEARDMOTOCYCLE } from 'src/animation/appeard.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD, APPEARDMOTOCYCLE],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('motocycleAnimation', { static: true })
  motocycleAnimation: ElementRef | undefined;

  public state: string = 'ready';
  public motoState: string = 'void';
  public slides = [
    {
      img: 'assets/img/slide-1.jpg',
    },
    {
      img: 'assets/img/slide-2.jpg',
    },
    {
      img: 'assets/img/slide-3.jpg',
    },
    {
      img: 'assets/img/slide-4.jpg',
    },
  ];

  constructor(private elementRef: ElementRef) {
    this.motocycleAnimation = new ElementRef(null);
  }

  ngAfterViewInit(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      options
    );
    observer.observe(this.motocycleAnimation?.nativeElement);
  }

  handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.motoState = 'ready';
        console.log(this.motoState);
        console.log('to vendo');
      } else {
        this.motoState = 'void';
        console.log(this.motoState);
        console.log('O elemento não está visível!');
      }
    });
  }
}
