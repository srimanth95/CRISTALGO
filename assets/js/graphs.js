var ctx = document.getElementById('chart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['JAN','FEB','MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
            label: '',
            data: [80000,-50000,65000,78000,45000,45567,125456,55678,104567,45678,34567,124945],
            backgroundColor: [
                '#47b2e4'
            ],
            borderColor: [
                '#000000'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 0,
                display: false 
            }
        }
    }
});


var ctx = document.getElementById('chartee');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            '01-Dec-21',
            '02-Dec-21',
            '03-Dec-21',
            '06-Dec-21',
            '07-Dec-21',
            '08-Dec-21',
            '09-Dec-21',
            '10-Dec-21',
            '13-Dec-21',
            '14-Dec-21',
            '15-Dec-21',
            '16-Dec-21',
            '17-Dec-21',
            '20-Dec-21',
            '21-Dec-21',
            '22-Dec-21',
            '23-Dec-21',
            '24-Dec-21',
            '27-Dec-21',
            '28-Dec-21',
            '29-Dec-21',
            '30-Dec-21',
            '31-Dec-21'
            ],
        datasets: [{
            label: '',
            data: [
                -3646,
                2310,
                1659,
                0,
                1600,
                0,
                2077,
                1898,
                0,
                179,
                1588,
                -1750,
                -4368,
                0,
                3006,
                -1468,
                1056,
                -1365,
                0,
                247,
                2098,
                3240,
                473
                ],
            backgroundColor: [
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#ff0000',
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',                                    
                        '#00ff00'
            ],
           
            borderWidth: 1
        }]
    },
    
    options: {
        legend: {
            position: 'top',
            labels: {
                boxWidth: 0,
                display: false 
            }
        }
    }
});



var ctx_2 = document.getElementById("charte").getContext('2d');
            var data_2 = {
                datasets: [{
                    label:'' ,
                   
                    data: [0,
                        -3681,
                        1263,
                        996,
                        693,
                        0,
                        -2290,
                        1813,
                        1700,
                        0,0,0,0,0,0,0,0,0,0,0
                        ],
                    backgroundColor: [
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#ff0000',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',
                        '#00ff00',                      
                        '#ff0000'

                        
                    ],
                }],
                labels: [
                    '03-Jan-22',
                    '04-Jan-22',
                    '05-Jan-22',
                    '06-Jan-22',
                    '07-Jan-22',
                    '10-Jan-22',
                    '11-Jan-22',
                    '12-Jan-22',
                    '13-Jan-22',
                    '14-Jan-22',
                    '17-Jan-22',
                    '18-Jan-22',
                    '19-Jan-22',
                    '20-Jan-22',
                    '21-Jan-22',
                    '24-Jan-22',
                    '25-Jan-22',
                    '27-Jan-22',
                    '28-Jan-22',
                    '31-Jan-22'
                ],
            };


            var myDoughnutChart_2 = new Chart(ctx_2, {
                type: 'bar',
                data: data_2,
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        position: 'top',
                        labels: {
                            boxWidth: 0,
                            display: false 
                        }
                    }
                }
            });

