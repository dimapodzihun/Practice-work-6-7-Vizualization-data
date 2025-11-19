const ctx=document.getElementById('lineChart')
const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
            'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];         
const sales = [120, 135, 145, 160, 175, 190, 185, 200, 210, 225, 240, 255];        
const trend = [115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225]; 
new Chart(ctx,{
    type:'line',
    data:{
        labels:months,
        datasets:[{
            label:'Фактичні продажі',
            data:sales,
            borderColor:'rgb(75, 192, 192)',
            fill:false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1 
        },
        {
            label:'Тренд',
            data:trend,
            borderColor:'rgb(255, 99, 132)',
            fill:false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',                     
            borderDash: [5, 5],                    
            tension: 0.1 
        }]
    },
    options:{
        responsive:true,
        plugins:{
            title:{
                text:'Продажі компанії за рік'
            }
        },
        scales:{
            x:{
                title:{
                    display:true,
                    text:'Місяці',
                    color:'red',
                    font:{size:16}
                }
            },
            y:{
                beginAtZero: true, 
                title:{
                    display:true,
                    text:'Тисячі гривень',
                    color:'red',
                    font:{size:16}
                }
            }
        }
    }
})