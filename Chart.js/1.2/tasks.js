const ctx2=document.getElementById('pieChart').getContext('2d')
const categories=['Продукти','Житло','Транспорт','Розваги','Одяг','Інше'];
const amounts=[8000,12000,3000,2000,1500,3500];

new Chart(ctx2,{
    type:'pie',
    data:{
        labels:categories,
        datasets:[{
            data:amounts,
            backgroundColor:['#FF6384', '#36A2EB','#FFCE56','#4BC0C0','#9966FF', '#FF9F40' ]
        }]
    },
    options:{
        responsive:true,
        plugins:{
            title:{
            display:true,
            text:'Розподіл сімейного бюджету'
            },
            legend:{
                position:'right'
            }
        }
    }
})