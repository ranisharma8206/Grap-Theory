g=new graph("dg");

// g.createVertex("a",300,300);
// g.createVertex("b",300,500);
// g.createVertex("c",700,500);
// g.createVertex("d",100,700);
// g.createVertex("e",500,700);
//
// g.createEdge(0,1);
// g.createEdge(0,2);
// g.createEdge(2,1);
// g.createEdge(2,4);
// g.createEdge(3,1);
// g.createEdge(3,4);
// console.log(g);

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
      selector: '.backtracking',
      style: {
        'background-color': 'yellow'

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
cy.panningEnabled( false );
cy.userPanningEnabled( false );

//cy.getElementById('b').addClass('rani')
function addVertex(x,y){
  var id= g.vertices.length;
  g.createVertex("vertex",x,y);
  var node = {};
  node.group = "nodes";
  var data = {};
  data.id =id;
  var position = {};
  position.x = x;
  position.y = y;
  node.data = data;
  node.position = position;

  console.log(node);
  cy.add(node);
}

function addEdge(source,target){
  console.log("Addedge",source,target);
  g.createEdge(source,target);
  var edge = {};
  edge.group = "edges";
  var data = {};
  data.id = "e"+""+source+","+target;
  data.source = source;
  data.target = target;
  edge.data = data;
  cy.add(edge);
}
$("#cy").dblclick(function(e){

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    console.log(x,y);
    addVertex(x,y);
});

parent = null;
child = null;

cy.on('tap', 'node', function(evt){
  var node = evt.target;
  if(parent == null){
    parent = node;
  }
  else if(child == null){
    child = node;
    addEdge(parent.id(),child.id());
    parent = null;
    child = null
  }
  console.log( 'tapped ' + node.id() );
});
