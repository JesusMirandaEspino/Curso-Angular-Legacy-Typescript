import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChartConfiguration, ChartData,  ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-graphics-bar',
  templateUrl: './graphics-bar.component.html',
  styleUrls: ['./graphics-bar.component.scss']
})
export class GraphicsBarComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  @Input() barChartType: ChartType = 'bar';



  @Input() barChartData: ChartData = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [ 82, 28, 1, 39, 46, 67, 50 ], label: 'Series C' }

    ]
  };


  constructor() {
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
