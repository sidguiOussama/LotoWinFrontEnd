import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../../Services/statistique.service';
import {Router} from '@angular/router';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sortie-annee',
  templateUrl: './sortie-annee.component.html',
  styleUrls: ['./sortie-annee.component.scss']
})
export class SortieAnneeComponent implements OnInit {

  sortieForm: FormGroup;
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }
  boulArray = [1, 8, 15, 22 , 29 , 36 , 43 ];
  years = [2008, 2009, 2010, 2011 , 2012 , 2013 , 2014 , 2016 , 2017, 2018, 2019, 2020, 2021 ];
  value = 1;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, stepSize: 1}}]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'bottom',
      }
    }
  };
  public barChartLabels: Label[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout' , 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [];

  ngOnInit(): void {
    this.sortieForm = new FormGroup({
      year: new FormControl(''),
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

  checked(value: number){
    this.value = value;
  }
  OnSubmit(){

    let value = [0,0,0,0,0,0,0,0,0,0,0,0];
    let date;
    let m = 0;
    const year = this.sortieForm.get('year').value;
    this.statistiqueService.getSortieAnnee(this.value, year).subscribe(
      (data) => {
        for (const d of data){
          date = new Date(d.date);
          m = date.getMonth() + 1;
          value[m - 1] = value[m - 1] + 1;
        }
        this.barChartData = [{data: value , label: 'Nombre de sortie '}];
      }
    );
  }

}
