import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-sortie-annee',
  templateUrl: './sortie-annee.component.html',
  styleUrls: ['./sortie-annee.component.scss']
})
export class SortieAnneeComponent implements OnInit {

  constructor(private statistiqueService: StatistiqueService, private router: Router) { }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'MAI', 'JUIN', 'JUILLETE', 'AOUT' , 'SEPTEMBRE', 'OCTOBRE', 'Novembre', 'DECEMBRE'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55], label: 'Sortie Anne' },
  ];


  ngOnInit(): void {
    this.statistiqueService.getSortieAnnee(3).subscribe(
      (data) => {
        console.table(data);
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

}
