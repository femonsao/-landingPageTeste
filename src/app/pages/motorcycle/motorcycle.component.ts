import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APPEARD } from 'src/animation/appeard.animation';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.scss'],
  animations: [APPEARD],
})
export class MotorcycleComponent {
  public state: string = 'ready';

  public form!: FormGroup;

  public viewStyle: boolean = false;
  public displayedColumns: string[] = ['img', 'nome', 'preco', 'ano'];

  public motocyclesData = [
    {
      id: 1,
      name: 'Scout',
      img: 'assets/img/scout.jpg',
      price: 'R$: 10.999,00',
      year: '2023',
    },
    {
      id: 2,
      name: 'Chief',
      img: 'assets/img/chief.jpg',
      price: 'R$: 14.499,00',
      year: '2023',
    },
    {
      id: 3,
      name: 'Challenger',
      img: 'assets/img/challenger.jpg',
      price: 'R$: 22.999,00',
      year: '2023',
    },
    {
      id: 4,
      name: 'FTR',
      img: 'assets/img/ftr.jpg',
      price: 'R$: 13.499,00',
      year: '2023',
    },
    {
      id: 5,
      name: 'Springfield',
      img: 'assets/img/springfield.jpg',
      price: 'R$: 22.099,00',
      year: '2023',
    },
    {
      id: 6,
      name: 'Vintage Dark Horse',
      img: 'assets/img/vintage-dark-horse.jpg',
      price: 'R$: 21.999,00',
      year: '2023',
    },
    {
      id: 7,
      name: 'Chieftain Limited',
      img: 'assets/img/chieftain-limited.jpg',
      price: 'R$: 27.999,00',
      year: '2023',
    },
    {
      id: 8,
      name: 'Roadmaster',
      img: 'assets/img/roadmaster.jpg',
      price: 'R$: 32.499,00',
      year: '2023',
    },
    {
      id: 9,
      name: 'FTR Carbon',
      img: 'assets/img/ftr-carbon.jpg',
      price: 'R$: 18.999,00',
      year: '2023',
    },
    {
      id: 10,
      name: 'Chief Bobber Dark Horse',
      img: 'assets/img/chief-bobber-dark-horse.jpg',
      price: 'R$: 18.499,00',
      year: '2023',
    },
    {
      id: 11,
      name: 'Vintage',
      img: 'assets/img/vintage.jpg',
      price: 'R$: 21.399,00',
      year: '2023',
    },
  ];
  public motocycles: any[] = [];
  constructor(private fb: FormBuilder) {
    this.motocycles = this.motocyclesData;
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      search: ['', Validators.required],
    });
  }

  public search() {
    if (!this.form.valid) {
      this.motocycles = this.motocyclesData;
      return;
    }
    const text = this.form.get('search')?.value;
    this.motocycles = this.motocycles.filter((motocycle) =>
      motocycle.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  public changeView() {
    this.form.get('search')?.patchValue('');
    this.viewStyle = !this.viewStyle;
    this.motocycles = this.motocyclesData;
  }
}
