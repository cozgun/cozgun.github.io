const Chart = require('chart.js');
const ChartDataLabels = require('chartjs-plugin-datalabels');
Chart.register(ChartDataLabels);
Chart.defaults.font.family = 'Calibri'
Chart.defaults.font.size = 12
// console.log(Chart.defaults.scales)
Chart.defaults.scale.grid.display = false

var $ = function (id) { return document.getElementById(id); };

var ctx = document.getElementById("canvasMonthendBalance").getContext("2d")
var mtdBalanceChart = new Chart(ctx, {
  type: "line",
  responsive: true,
  data: {
    // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Actual",
        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: "#3cba9f",
        backgroundColor: [
          "Green",
        ],
        fill: true,
      },

    ],
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      title: {
        display: false,
        text: "P&L Trend" + " ('000 TRY)",
        font: {
          size: 15
        },
      },
      legend: {
        display: false,
      },

    },
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            fontSize: 20,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            fontSize: 20,
          },
        },
      ],
    },
  },
});

var ctx = document.getElementById("canvasMtdAll").getContext("2d");
var mtdAllChart = new Chart(ctx, {
  type: "bar",
  responsive: true,
  data: {
    // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Actual",
        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: "#3cba9f",
        backgroundColor: [
          "Green",
        ],
        fill: true,
      },

    ],
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      title: {
        display: false,
        text: $('selectYear').value + " MTD P&L" + " ('000 TRY)",
        font: {
          size: 15
        },
      }
    },
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            fontSize: 10,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});

var ctx = document.getElementById("canvasAnnualAll").getContext("2d");
var annualAllChart = new Chart(ctx, {
  type: "bar",
  responsive: true,
  data: {
    // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Actual",
        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: "#3cba9f",
        backgroundColor: [
          "Blue",
        ],
        fill: true,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      title: {
        text: "P&L by years ('000 TRY)",
        display: false,
        font: {
          size: 15
        },
      },
      legend: {
        display: false,
      },

    },

    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            fontSize: 10,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});

var barChartData = {
  labels: ["Actual", "Budget"],
  datasets: [{
    backgroundColor: ["blue", "orange"],
    data: [localStorage.getItem("sessionTotalActual"), localStorage.getItem("sessionTotalBudget")]
  }]

};


let obj = [];
let exchRatesArray = [];


var ctx = document.getElementById("exchangeRates").getContext("2d");
var exchangeRatesChart = new Chart(ctx, {
  type: 'line',
  // data: exchangeRateData,
  axisX: {
    labelFontSize: 10
  },
  options: {

    scales: {
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        display: true,
        labels: {
          fontSize: 10
        }
      },
      title: {
        display: false,
        text: "Exchange Rates",
        font: {
          size: 15
        },
      },
    },
    responsive: true,
  }
});

var ctx = document.getElementById("exchangeRatesAnnual").getContext("2d");
var exchangeRatesAnnualChart =  new Chart(ctx, {
  type: 'line',
  // data: exchangeRateData,
  axisX: {
    labelFontSize: 10
  },
  options: {

    scales: {
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        display: false,
        labels: {
          fontSize: 10
        }
      },
      title: {
        display: false,
        text: "Exchange Rates",
        font: {
          size: 15
        },
      },
    },
    responsive: true,
  }
});


var ctx = document.getElementById("loansChart").getContext("2d");
var loanChart = new Chart(ctx, {
  type: 'bar',
  // data: loanChartData,
  axisX: {
    labelFontSize: 10
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        display: true,
        labels: {
          fontSize: 8
        }
      },
      title: {
        display: false,
        text: "Assets",
        font: {
          size: 15
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: true,        
          font: {
            size: 11
          },
        },
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          display: false
        },
      }
    }
  }
});

var ctx = document.getElementById("loansChartAnnual").getContext("2d");
var loansChartAnnual = new Chart(ctx, {
  type: 'bar',
  // data: loanChartData,
  axisX: {
    labelFontSize: 10
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        display: false,
        labels: {
          fontSize: 8
        }
      },
      title: {
        display: false,
        text: "Assets",
        font: {
          size: 15
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: true,
          font: {
            size: 11
          },
        },
        stacked: true,
      },
      y: {
        stacked: true,        
        ticks: {
          display: false
        },
      }
    }
  }
});



var ctx = document.getElementById("nonCashLoansChart").getContext("2d");
var nonCashLoanChart = new Chart(ctx, {
  type: 'bar',
  // data: nonCashLoanChartData,
  axisX: {
    labelFontSize: 10
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        display: true,
        labels: {
          fontSize: 8
        }
      },
      title: {
        display: false,
        text: "Non-cash Loans",
        font: {
          size: 15
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: true,
          font: {
            size: 11
          },
        },
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        ticks: {
          display: false
        },
      }
    }
  }
});

var ctx = document.getElementById("nonCashLoansChartAnnual").getContext("2d");
var nonCashLoansChartAnnual = new Chart(ctx, {
  type: 'bar',
  // data: nonCashLoanChartData,
  axisX: {
    labelFontSize: 10
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        display: false,
        labels: {
          fontSize: 8
        }
      },
      title: {
        display: false,
        text: "Non-cash Loans",
        font: {
          size: 15
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: true,
          font: {
            size: 11
          },
        },
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        ticks: {
          display: false
        },
        // grid: {
        //   display: false
        // }
      }
    }
  }
});

