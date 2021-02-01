import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TirageDto} from '../../../Models/TirageDto';

@Component({
  selector: 'app-plus-souvent',
  templateUrl: './plus-souvent.component.html',
  styleUrls: ['./plus-souvent.component.scss']
})
export class PlusSouventComponent implements OnInit {

  plusSouventForm: FormGroup;
  show = false;
  map: Map<number, number> = new Map<number, number>();
  numbers: number[] = [];
  tirageDto: TirageDto;
  spinner = false;
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 1; i <= 49; i++) {
      this.numbers[i] = i;
    }

    this.plusSouventForm = new FormGroup({
     dateDebut: new FormControl(''),
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
  ecart() {
    this.router.navigate(['/ecart']);
  }
  OnSubmit() {
      //const number = this.plusSouventForm.get('number').value;
      //alert(this.plusSouventForm.get('dateDebut').value);
    this.spinner = true;
      this.tirageDto = new TirageDto();
      this.tirageDto.nombre = this.plusSouventForm.get('number').value;
      this.tirageDto.datedebut = this.plusSouventForm.get('dateDebut').value;
      this.tirageDto.dateFin = this.plusSouventForm.get('dateFin').value;
      this.map.clear();
      this.statistiqueService.getNumeroSouvent(this.tirageDto).subscribe(
        (data) => {
          for (const [key, value] of Object.entries(data)) {
            this.map.set(Number(key), value);
          }
          console.log(this.map);
          this.show = true;
          this.spinner = false;
        }
      );

  }
}
