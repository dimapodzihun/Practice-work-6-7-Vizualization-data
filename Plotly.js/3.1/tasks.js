const size = 50;        
const x = [];         
const y = [];         
const z = [];          
for(let i = 0; i < size; i++) {             
    x[i] = -5 + (10 * i / (size - 1));             
    y[i] = -5 + (10 * i / (size - 1));         
}          
for(let i = 0; i < size; i++) {             
    z[i] = [];             
    for(let j = 0; j < size; j++) {                 
        z[i][j] = x[i] * x[i] + y[j] * y[j];             
    }         
}          
const data1 = [{ 
    z: z,             
    x: x,             
    y: y,             
    type: 'surface',             
    colorscale: 'Viridis'         
}];          
const layout1 = {             
    title: '3D Поверхня: z = x² + y²',             
    scene: {                 
        xaxis: {title: 'X'},                 
        yaxis: {title: 'Y'},                 
        zaxis: {title: 'Z'}             
    }         
}; 

Plotly.newPlot('surface3d',data1,layout1)