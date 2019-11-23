class vertex{
  //constructor takes name and id of the vertex
  constructor(id,name,x,y){
    this.id=id;
    this.name=name;
    this.child= new Array();
    this.x=x;
    this.y=y;
  }

  //method to add child of a vertex
  addChild(v){
    this.child.push(v);
  }
}

class edge{
  //constructor takes source, destination and weight of the edge
  constructor(source,dest,weight){
    this.source=source;
    this.destination=dest;
    this.weight=weight;
  }

}

class graph{
  //constructor to add a graph
  //type contains Directed graph:dg, Undirected Graph:ug
  constructor(type){
    this.type = type;
    this.vertices = new Array();
    this.edges = new Array();
  }
  //method to create a vertex. it takes name, corrdinates of the vertex
  createVertex(name,x,y){
    this.vertices.push(new vertex(this.vertices.length,name,x,y));
  }
  //method to create the edge. It takes the id of source,destination,weight of edge
  createEdge(v1,v2,weight=1){
    this.edges.push(new edge(this.vertices[v1],this.vertices[v2],weight));
    this.vertices[v1].addChild(this.vertices[v2]);

  }

  //Draw graph
  drawGraph(){
    var drawgraph = new Array();
    for(var i=0;i<this.vertices.length;i++){
      var node = {};
      node.group = "nodes";
      var data = {};
      data.id = i;
      var position = {};
      position.x = this.vertices[i].x;
      position.y = this.vertices[i].y;
      node.data = data;
      node.position = position;
      drawgraph.push(node);
    }
    for(var i=0;i<this.edges.length;i++){
      var edge = {};
      edge.group = "edges";
      var data = {};
      data.id = "e"+i;
      data.source = this.edges[i].source.id;
      data.target = this.edges[i].destination.id;
      edge.data = data;
      drawgraph.push(edge);
    }
    return drawgraph;
  }
}
