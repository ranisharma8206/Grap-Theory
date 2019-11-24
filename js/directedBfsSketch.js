var g=new graph("dg");
g.createVertex("a",500,300);
g.createVertex("b",300,500);
g.createVertex("c",700,500);
g.createVertex("d",100,700);
g.createVertex("e",500,700);

g.createEdge(0,1);
g.createEdge(0,2);
g.createEdge(2,1);
g.createEdge(2,4);
g.createEdge(3,1);
g.createEdge(3,4);
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
    {
      selector: '.visited',
      style: {
        'background-color': 'red'

      }
    },
    {
      selector: '.evisited',
      style: {
        'width': 3,
        'line-color': 'green',
        'curve-style' : 'bezier',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    },
    {
      selector: '.eAlreadyvisited',
      style: {
        'width': 3,
        'line-color': 'red',
        'curve-style' : 'bezier',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }

});
var eles = cy.add(g.drawGraph());
//cy.getElementById('b').addClass('rani');
