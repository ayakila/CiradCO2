import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
@Component({
  selector: 'app-mes-resultats',
  templateUrl: './mes-resultats.component.html',
  styleUrls: ['./mes-resultats.component.scss']
})
export class MesResultatsComponent implements OnInit {
  selectedAnnee = "2021";
  options: any;
  optionsDeplacement:any;
  chart;
  chartDeplacement;
  constructor() { }

  ngOnInit(): void {
    this.initChart();
    this.loadChart();
    this.initChartDeplacement();
    this.loadChartDeplacement();
  }
  gotoLinkConversion() {
    //  window.location.href = 'https://datagir.ademe.fr/apps/mon-convertisseur-co2/';
    window.open('https://datagir.ademe.fr/apps/mon-convertisseur-co2/', "_blank");
  }
  initChart() {
    this.options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Evolution annuelle par mode de transport'
      },
      xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Mode de transport par année'
        }
      },
      scrollbar: { enabled: false },
      rangeSelector: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: [
      ],
    }
  }
  initChartDeplacement(){
    this.optionsDeplacement = {
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Résultats 2020: représentation par nature de déplacements'
    },
    // subtitle: {
    //     text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    // },
    xAxis: {
        categories: ['Déplacements professionnels', 'Déplacements congés expatriation', 'Déplacements domicile-travail'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nombre de déplacements',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    // tooltip: {
    //     valueSuffix: ' millions'
    // },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend:{ enabled:false },
    credits: {
        enabled: false
    },
    series: []
  }
}
  loadChartDeplacement(){
  //  this.optionsDeplacement.xAxis.categories = ['Déplacements professionnels', 'Déplacements congés expatriation','Déplacements domicile-travail' ] ;
    this.optionsDeplacement.series = [{
      // name: 'Year 1800',
      data: [80, 20, 10]
  }
  // , {
  //     name: 'Year 1900',
  //     data: [133, 156, 947, 408, 6]
  // }, {
  //     name: 'Year 2000',
  //     data: [814, 841, 3714, 727, 31]
  // }, {
  //     name: 'Year 2016',
  //     data: [1216, 1001, 4436, 738, 40]
  // }
]
   
    this.chartDeplacement = Highcharts.chart('container-chart-nature-deplacement', this.optionsDeplacement);
  //  this.chartDeplacement.xAxis[0].update({ categories: ['Déplacements professionnels', 'Déplacements congés expatriation','Déplacements domicile-travail' ] });

  }
  loadChart() {
    this.options.series = [{
      name: 'Avion',
      data: [50, 30, 40, 70, 20]
    }, {
      name: 'Voiture',
      data: [20, 20, 30, 20, 10]
    }, {
      name: 'Train',
      data: [30, 40, 40, 20, 50]
    }]
    this.chart = Highcharts.chart('container-chart', this.options);
  }
}
