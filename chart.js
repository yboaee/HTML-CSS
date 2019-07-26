var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Current week',
            data: [1200000, 1900000, 300000, 500000, 200000, 300000, 1000000],
            borderCapStyle: 'round',
            borderColor: '#c42252',
            borderJoinStyle: 'miter',
            fill: 'Disabled',
            pointHoverBorderColor: '#c42252',
            pointHoverBackgroundColor: '#c42252',
        },{
            label: 'Previous week',
            data: [1000000, 1500000, 500000, 800000, 300000, 100000, 400000],
            borderCapStyle: 'round',
            borderColor: '#BDBDBD',
            borderJoinStyle: 'miter',
            borderDash: [5, 8],
            fill: 'Disabled',
            pointHoverBorderColor: '#BDBDBD',
            pointHoverBackgroundColor: '#c42252',
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