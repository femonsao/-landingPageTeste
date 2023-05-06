import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { APPEARD } from 'src/animation/appeard.animation';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  animations: [APPEARD],
})
export class BudgetComponent {
  public motocycles: any = [];
  public form!: FormGroup;
  public state: string = 'ready';

  public motocyclesData = [
    {
      id: 1,
      name: 'Scout',
      img: 'assets/img/scout.jpg',
      price: "10'999,00",
    },
    {
      id: 2,
      name: 'Chief',
      img: 'assets/img/chief.jpg',
      price: "14'499,00",
    },
    {
      id: 3,
      name: 'Challenger',
      img: 'assets/img/challenger.jpg',
      price: "22'999,00",
    },
    {
      id: 4,
      name: 'FTR',
      img: 'assets/img/ftr.jpg',
      price: "13'499,00",
    },
    {
      id: 5,
      name: 'Springfield',
      img: 'assets/img/springfield.jpg',
      price: "22'099,00",
    },
    {
      id: 6,
      name: 'Vintage Dark Horse',
      img: 'assets/img/vintage-dark-horse.jpg',
      price: "21'999,00",
    },
    {
      id: 7,
      name: 'Chieftain Limited',
      img: 'assets/img/chieftain-limited.jpg',
      price: "27'999,00",
    },
    {
      id: 8,
      name: 'Roadmaster',
      img: 'assets/img/roadmaster.jpg',
      price: "32'499,00",
    },
    {
      id: 9,
      name: 'FTR Carbon',
      img: 'assets/img/ftr-carbon.jpg',
      price: "18'999,00",
    },
    {
      id: 10,
      name: 'Chief Bobber Dark Horse',
      img: 'assets/img/chief-bobber-dark-horse.jpg',
      price: "18'499,00",
    },
    {
      id: 11,
      name: 'Vintage',
      img: 'assets/img/vintage.jpg',
      price: "21'399,00",
    },
  ];
  public years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017'];
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      motocycleName: ['', Validators.required],
      email: ['', Validators.email],
      year: ['', Validators.required],
    });
  }

  public sendBudget() {
    this.form.reset();
    this.openSnackBar();
  }
  openSnackBar() {
    const config: MatSnackBarConfig = {
      panelClass: ['snack-sucess'],
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 1000,
    };
    this._snackBar.open('Solicitação enviada com sucesso!!', 'X', config);
  }
}
