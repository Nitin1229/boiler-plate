import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpErrorResponse } from '@angular/common/http';
declare var require: any;
const noData = require('highcharts/modules/no-data-to-display')
noData(Highcharts)
import exporting from 'highcharts/modules/exporting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
exporting(Highcharts)
const export1 = require('highcharts/modules/export-data');
const export2 = require('highcharts/modules/exporting');
const accessibility = require('highcharts/modules/accessibility');
const Boost = require('highcharts/modules/boost');
const More = require('highcharts/highcharts-more');
export1(Highcharts);
// export2(Highcharts);
accessibility(Highcharts);
Boost(Highcharts);
More(Highcharts);

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  public options: any = {
    chart: {
        // renderTo: 'container',
        type: 'pie'
    },
    title: {
        text: 'What is your favourite ice cream flavour?'
    },
    yAxis: {
        title: {
            text: ""
        }
    },
    plotOptions: {
        pie: {
            shadow: false
        }
    },
    tooltip: {
      enabled: true,
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    exporting: {
      enabled: true
    },
    credits: {
      enabled: false
    },
    series: [{
        name: '',
        enableMouseTracking: true,
        hover: {
          enabled: false,
          brightness: 0
        },
        animation: false,
        states: {
          inactive: {
            opacity: 1 // to remove the mouseover
          },
          hover: {
            enabled: false
          }
        },
        data: [["Vanilla",27],["Chocolate",55],["Starwberry",18]],
        // size: '%',
        innerSize: '20%',
        showInLegend:true,
        dataLabels: {
            enabled: false
        }
    }]
};
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('donutChart', this.options);
  }

}
