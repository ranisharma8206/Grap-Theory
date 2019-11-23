var g=new graph();
g.createVertex("a",700,200);
g.createVertex("b",500,400);
g.createVertex("c",900,400);
g.createVertex("d",400,600);
g.createVertex("e",600,600);
g.createVertex("d",800,600);
g.createVertex("d",1000,600);
g.createEdge(0,1);
g.createEdge(0,2);
g.createEdge(1,3);
g.createEdge(1,4);
g.createEdge(2,5);
g.createEdge(6,2);
g.createEdge(5,4);
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
