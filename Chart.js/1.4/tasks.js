const ctx3=document.getElementById('radarChart')
const skills=['HTML/CSS','JavaScript','Python','Бази даних','Дизайн','Комунікація'];
const level=[8,7,6,5,4,9];

new Chart(ctx3,{
    type:'radar',
    data:{
        labels:skills,
        datasets:[{
            label:'Рівень навичок',
            data:level,
            borderColor:'rgba(54, 162, 235, 1)',
            backgroundColor:'rgba(54, 162, 235, 0.3)'
    }],
    },
    options:{
        responsive:true,
        plugins:{
            title:{
                display:true,
                text:'Навички розробника'
            }
        },
        scales:{
             r: {
                min: 0,        // шкала від 0
                max: 10,       // до 10
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: '#bbbbbb'
                }
        }
    }
}})