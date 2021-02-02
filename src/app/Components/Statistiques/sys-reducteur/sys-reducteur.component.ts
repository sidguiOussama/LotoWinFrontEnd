import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';
import {CombinDTO} from '../../../Models/CombinDTO';

@Component({
  selector: 'app-sys-reducteur',
  templateUrl: './sys-reducteur.component.html',
  styleUrls: ['./sys-reducteur.component.scss']
})
export class SysReducteurComponent implements OnInit {

  combinDto: CombinDTO;
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }
  ngOnInit(): void {
    this.combinDto = new CombinDTO();
    this.combinDto.valeurs.push(1);
    this.combinDto.valeurs.push(2);
    this.combinDto.valeurs.push(3);
    this.combinDto.valeurs.push(4);
    this.combinDto.valeurs.push(5);
    this.combinDto.valeurs.push(6);
    this.combinDto.garantie = 4;
    this.statistiqueService.getSystemReducteur(this.combinDto).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
