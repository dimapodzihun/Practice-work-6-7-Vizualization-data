var options = {
    series: [87, 73, 92, 68],
    chart: {
        height: 400,
        type: 'radialBar',
    },
    labels: ['Продажі', 'Маркетинг', 'IT', 'HR'],

    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '16px'
                },
                value: {
                    fontSize: '22px'
                }
            }
        }
    },

    colors: ['#ff4d4d', '#4d94ff', '#33cc33', '#ffcc00'],

    title: {
        text: 'Виконання цілей відділів',
        align: 'center'
    }
};

var chart = new ApexCharts(document.querySelector("#radialChart"), options);
chart.render();