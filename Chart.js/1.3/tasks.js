const ctx4=document.getElementById('barChart')
const spec=['Інформатика','Економіка','Маркетинг','Дизайн','Психологія'];
const $2021=[45,38,25,20,30];
const $2022=[52,35,30,25,33];
const $2023=[58,40,35,28,37];

new Chart(ctx4,{
    type:'bar',
    data:{
        labels:spec,
        datasets:[{
            label:'2021',
            data:$2021,
            backgroundColor:['#FF6384','#FF6384','#FF6384','#FF6384','#FF6384']
    },
{
            label:'2022',
            data:$2022,
            backgroundColor:['#63ffbeff', '#63ffbeff','#63ffbeff','#63ffbeff','#63ffbeff']    
},
{
            label:'2023',
            data:$2023,
            backgroundColor:['#36A2EB','#36A2EB','#36A2EB','#36A2EB','#36A2EB']  
}
]
},
options:{
    responsive:true,
    plugins:{
        title:{
            display:true,
            text:'Порівняння кількість студентів за спеціальностями'
        },
        legend:{
            display:true
        }
    }
}
})