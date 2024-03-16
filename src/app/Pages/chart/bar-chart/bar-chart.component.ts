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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chartData: any = [];
  categories: any =[];
    public options1: any = {
      chart: {
          type: 'bar',
          backgroundColor: '#FFFFFF'
      },
      title: {
          text: ''
      },
      legend: {
        enabled:false,
        align: 'right',
        cursor:"default",
        verticalAlign: 'top',
        x: 0,
        y: 0,
        layout:"horizontal"
    },
      xAxis: {
          categories: [],
          gridLineWidth: 0,
          gridLineColor: '#fff',
      },
      yAxis: {
        visible: true,
          labels: {
            enabled: false
          },
          title: {
            text: 'Number of Employees'
        },
          gridLineWidth: 0,
          gridLineColor: '#fff',
          min: 0,

          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: 'gray',
                  textOutline: 'none'
              }
          }
      },
      credits: {
        enabled: false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              colorByPoint: true,
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [{
        name: '',
        data: [],
        showInLegend: true
      }]
  }

  constructor() { }

  ngOnInit(): void {
    this.chartData.push({"y":100,"color":'blue'},{"y":300,"color":'blue'},{"y":286,"color":'blue'});
    this.categories.push('2010','2011','2012');
    this.options1.series[0]['data'] = this.chartData;
    this.options1.xAxis.categories = this.categories;
    this.options1.series[0].showInLegend =true;
    Highcharts.chart('barChart', this.options1);
  }


}
