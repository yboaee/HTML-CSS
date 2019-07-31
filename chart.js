var lineCtx = document.getElementById('lineChart');
var lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Current week',
            data: [1200000, 1900000, 300000, 500000, 200000, 300000, 1000000],
            borderCapStyle: 'round',
            borderColor: '#F13771',
            borderJoinStyle: 'miter',
            fill: 'Disabled',
            pointHoverBackgroundColor: '#F13771',
        },{
            label: 'Previous week',
            data: [1000000, 1500000, 500000, 800000, 300000, 100000, 400000],
            borderCapStyle: 'round',
            borderColor: '#BDBDBD',
            borderJoinStyle: 'miter',
            borderDash: [5, 8],
            fill: 'Disabled',
            pointHoverBackgroundColor: '#BDBDBD',
        }]
    },
    options: {
        legend:{
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    
                },
                ticks: {
                    beginAtZero: true,
                    lineHeight: '200%'
                }
            }]
        }
    }
});

Chart.pluginService.register({
    beforeDraw: function (chart) {
      if (chart.config.options.elements.center) {
        //Get ctx from string
        var ctx = chart.chart.ctx;
  
        //Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'Arial';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
        //Start with a base font of 30px
        ctx.font = "50px " + fontStyle;
  
        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  
        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);
  
        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight);
  
        //Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse+"px " + fontStyle;
        ctx.fillStyle = color;
  
        //Draw text in center
        ctx.fillText(txt, centerX, centerY);
      }
    }
  });

var doughnutCtx = document.getElementById('doughnutChart');
var doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Current', 'Previous'],
        datasets:[{
            data: [92, 8],
            backgroundColor: ['#F13771', '#3BD98F']
        }]
        
    },
    options: {
        legend:{
            display: false
        },
        cutoutPercentage: 90,
        elements: {
            center: {
                text: '92%',
                color: '#F13771',
                fontStyle: 'Arial',
                sidePadding: 20
            }
        }
    }
});
var doughnut2Ctx = document.getElementById('doughnut2Chart');
var doughnut2Chart = new Chart(doughnut2Ctx, {
    type: 'doughnut',
    data: {
        labels: ['Current', 'Previous'],
        datasets:[{
            data: [64, 36],
            backgroundColor: ['#FFFFFF', '#3BD98F']
        }]
        
    },
    options: {
        legend:{
            display: false
        },
        cutoutPercentage: 90,
        elements: {
            center: {
                text: '64%',
                color: '#FFFFFF',
                fontStyle: 'Arial',
                sidePadding: 20
            }
        }
    }
});