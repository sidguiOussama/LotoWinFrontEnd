import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sortie-annee',
  templateUrl: './sortie-annee.component.html',
  styleUrls: ['./sortie-annee.component.scss']
})
export class SortieAnneeComponent implements OnInit {

  constructor(private statistiqueService: StatistiqueService, private router: Router) { }

  ngOnInit(): void {
    this.statistiqueService.getSortieAnnee(3).subscribe(
      (data) => {
        console.table(data);
      }
    );
  }

}
