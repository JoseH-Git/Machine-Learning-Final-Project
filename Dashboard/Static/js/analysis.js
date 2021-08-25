
function scatterplot(Employees,x,y,id,color_circle){
  titlex=x
  titley=y
  
  y=Employees.map(sample=>sample[y])
  x=Employees.map(sample=>sample[x])

  User=Employees.map(sample=>sample['User'])            
  Department=Employees.map(sample=>sample['Department'])

  var trace1 = {x: x, y: y,
    text: Department, 
    // text: `${ArtistName} | ${Song}`, 
    mode: 'markers', 
    type: 'scatter',
    marker: {
      size:10,
      color:color_circle
    }
  };
  
  var layout = {
    paper_bgcolor:'rgba(0,0,0,0)',
    plot_bgcolor:'rgba(0,0,0,0)',
    title: {
      text: `${titlex} vs ${titley}`,
      font: {family: 'Poppins, monospace', size: 22, color: 'white'}
    },
    xaxis: {
      gridwidth: 0.5,
      title: {
        text: titlex,
        font: {family: 'Poppins, monospace', size: 18, color: 'white'}
      },
      tickwidth: 4,
      tickcolor: 'white',
      

    },
    yaxis: {
      gridwidth: 0.5,
      title: {
        text: titley,
        font: {family: 'Poppins, monospace',size: 18,color: 'white'}
      },
      tickwidth: 4,
      tickcolor: 'white'
    }
  };
  
  var data = [trace1];            
  Plotly.newPlot(id, data,layout);
  
}

d3.json('http://127.0.0.1:5000/Analysis').then(Employees=>{
  console.log(Employees)
  scatterplot(Employees,'Gender','Seniority','scatter1','rgba(30, 215, 96, 1)')
  scatterplot(Employees,'Gender','Age','scatter2','rgb(29, 117, 222, 1)')
  scatterplot(Employees,'Gate','Comparatio','scatter3','rgb(255, 153, 0, 1)')
  scatterplot(Employees,'Emp_type','Scale','scatter4','rgba(219, 68, 55,1)')
});