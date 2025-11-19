const data2 = [{
            z: [
                [1.0,-0.7,0.3,0.1],
                [-0.7,1.0,-0.2,-0.4],
                [0.3,-0.2,1.0,0.6],
                [0.1,-0.4,0.6,1.0],
            ],
            x: ['Температура','Вологість','Тиск','Швидкість вітру'],
            y: ['Температура','Вологість','Тиск','Швидкість вітру'],
            type: 'heatmap',
            colorscale: 'RdYlBu'
        }];
const layout2 = {
    title: 'Кореляційна матриця',
        xaxis: {
        title: 'Показники',
        side: 'top'
    },
    yaxis: {
        title: 'Показники',
        autorange: 'reversed'
    }
};
Plotly.newPlot('heatmap',data2,layout2)