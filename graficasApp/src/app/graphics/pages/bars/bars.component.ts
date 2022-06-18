import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: {},
          y: {
            min: 10
          }
        },
        plugins: {
          legend: {
            display: true,
          },
        }
      };
      public barChartType: ChartType = 'bar';
      public barChartPlugins = [
      ];

      public barChartData: ChartData<'bar'> = {
        labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
        datasets: [
          { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#0D6AFF', hoverBackgroundColor: '#0C29F5' },
          { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#0DEAFF', hoverBackgroundColor: '#0C29F5'  },
          { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C', backgroundColor: '#0095E8', hoverBackgroundColor: '#0C29F5'  }
        ]
      };

  constructor(){
    // code
  }

  ngOnInit(): void {
    // code
  }


  public randomize(): void {

    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
