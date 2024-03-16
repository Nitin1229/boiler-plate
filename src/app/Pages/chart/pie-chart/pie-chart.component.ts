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
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public options: any = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        // plotShadow: false,
        animation: false,
        type: 'pie',
        backgroundColor: '#FFFFFF',
    },
    title: {
        text: 'Browser Usage'
    },
    tooltip: {
      enabled: true,
      outside: false,
      animation: false,
      backgroundColor: '#FFFFFF',
      borderColor: '#DBDBDB',
      shadow: false,
      borderWidth: 2,
      borderRadius: 10,
      style: {
        'z-index': '9999'
      },
      shared: true,
      followPointer: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    legend: {
      enabled: true,
      // floating: true,
      // borderWidth: 0,
      // cursor:'default',
      // align: 'right',
      verticalAlign: 'middle',
      x: 180,
      // y: 0,
      layout: 'vertical',
      itemMarginTop: 1, // Space between each category in the legend
      itemMarginBottom: 1,
      // width:500,
      itemStyle: {
        // lineHeight: "30px", // Aligning icons and text,
        //  width:'100%',
        // textOverflow: 'ellipsis',
        // overflow: 'hidden'
        fontSize: '7pt',
        fontWeight: 'light'

      },
      
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            },
            point: {
              events: {
                legendItemClick: function () {
                  return false;
                }
              }
            },
            // size: 130,
            name: '',
        }
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
        data: [
            { name: 'Chrome', y: 73.24 },
            { name: 'Edge', y: 12.93 },
            { name: 'Firefox', y: 4.73 },
            { name: 'Safari', y: 2.50 },
            { name: 'Internet Explorer', y: 1.65 },
            { name: 'Other', y: 4.93 }
        ],
        showInLegend:true,
    }]
}
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('pieChart', this.options);
  }

}
