import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plus-souvent',
  templateUrl: './plus-souvent.component.html',
  styleUrls: ['./plus-souvent.component.scss']
})
export class PlusSouventComponent implements OnInit {

  map: Map<number, number> = new Map<number, number>();
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }

  ngOnInit(): void {
    this.statistiqueService.getNumeroSouvent(5).subscribe(
      (data) => {
        for (const [key, value] of Object.entries(data)) {
          this.map.set(Number(key), value);
        }
        console.log(this.map);
      }
    );
  }

  plus() {
    this.router.navigate(['/plus']);
  }

  moins() {
    this.router.navigate(['/moins']);
  }

}
