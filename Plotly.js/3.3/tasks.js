const m=[85, 90, 78, 92, 88, 76, 94, 82, 87, 91];
const f=[72, 85, 69, 88, 91, 74, 86, 79, 83, 77];
const xi=[88, 92, 85, 89, 94, 87, 91, 86, 90, 93];
const b= [76, 82, 79, 85, 88, 74, 86, 81, 84, 80];

const data3=[{
    y:m,
    type:'box',
    name:'Математика'
},
{
    y:f,
    type:'box',
    name:'Фізика'
},
{
    y:xi,
    type:'box',
    name:'Хімія'
},
{
    y:b,
    type:'box',
    name:'Біологія'
}]
const layout3 = {             
    title: 'Розподіл оцінок студентів за прдеметами',                            
    xaxis: {title: 'Предмети'},                 
    yaxis: {title: 'Оцінки'}              
}; 

Plotly.newPlot('boxplot',data3,layout3);