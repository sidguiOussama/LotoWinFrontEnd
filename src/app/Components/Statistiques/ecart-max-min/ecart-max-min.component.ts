import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';
import {EcartDTO} from '../../../Models/EcartDTO';

@Component({
  selector: 'app-ecart-max-min',
  templateUrl: './ecart-max-min.component.html',
  styleUrls: ['./ecart-max-min.component.scss']
})
export class EcartMaxMinComponent implements OnInit {

  ecarts: EcartDTO[];
  spinner = true;
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }
  ngOnInit(): void {
    this.statistiqueService.getEcart().subscribe(
      (data) => {
        this.ecarts = data;
        this.spinner = false;
      }
    );
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

}
