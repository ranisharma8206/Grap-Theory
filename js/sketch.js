var g=new graph();
g.createVertex("a",100,100);
g.createVertex("b",200,100);
g.createVertex("c",200,200);
g.createVertex("d",100,200);
g.createEdge(0,1);
g.createEdge(1,2);
g.createEdge(2,3);
g.createEdge(3,1);
console.log(g);

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [ // list of graph elements to start with

  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'curve-style' : 'bezier',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    },
    // {
    //   selector: '.rani',
    //   style: {
    //     'background-color': 'red'
    //
    //   }
    // }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }

});
var eles = cy.add(g.drawGraph());
//cy.getElementById('b').addClass('rani');
