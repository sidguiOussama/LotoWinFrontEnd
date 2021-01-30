import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-moins-souvent',
  templateUrl: './moins-souvent.component.html',
  styleUrls: ['./moins-souvent.component.scss']
})
export class MoinsSouventComponent implements OnInit {

  map: Map<number, number> = new Map<number, number>();
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }
  numbers: number[] = [];
  show = false;
  moinsSouventForm: FormGroup;

  ngOnInit(): void {
    for (let i = 1; i <= 49; i++) {
      this.numbers[i] = i;
    }

    this.moinsSouventForm = new FormGroup({
      dateDebut: new FormControl('', Validators.required),
      dateFin: new FormControl(''),
      number: new FormControl(''),
    });

  }

 plus() {
    this.router.navigate(['/plus']);
  }

  moins() {
    this.router.navigate(['/moins']);
  }
  sortie() {
    this.router.navigate(['/sortie']);
  }

  OnSubmit() {
    const dateD = this.moinsSouventForm.get('number').value;
    this.statistiqueService.getNumeroMoinsSouvent(5).subscribe(
      (data) => {
        for (const [key, value] of Object.entries(data)) {
          this.map.set(Number(key), value);
        }
        console.log(this.map);
        this.show = true;
      }
    );

  }

}
