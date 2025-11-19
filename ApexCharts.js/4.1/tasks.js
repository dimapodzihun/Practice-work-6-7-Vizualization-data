const options = {
    series: [{
        name: 'Прибуток',
        data: [12.5, 15.8, 18.2, 22.1, 16.7, 19.4, 24.6, 28.3]
    }],

    chart: {
        type: 'area',
        height: 400,
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800
        }
    },

    stroke: {
        curve: 'smooth',
        width: 2
    },

    tooltip: {
        enabled: true,
    },

    xaxis: {
        categories: [
            'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
            'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'
        ]
    },

    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#ff0080'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.9,
            opacityTo: 0.1,
            stops: [0, 100]
        }
    },

    title: {
        text: 'Прибуток компанії по кварталах',
        align: 'center'
    },

    yaxis: {
        title: {
            text: 'Мільйони гривень'
        }
    }
};

const chart = new ApexCharts(document.querySelector("#areaChart"), options);
chart.render();