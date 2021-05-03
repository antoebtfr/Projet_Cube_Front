import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-adminstats',
  templateUrl: './adminstats.component.html',
  styleUrls: ['./adminstats.component.css']
})
export class AdminstatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  private labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  private data = {
    labels: this.labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  private initChart() {
    let canvas = document.getElementById('myChart') as HTMLCanvasElement;

    let myChart = new Chart( canvas, {type: 'line', data: this.data});

    myChart;
  }



}
