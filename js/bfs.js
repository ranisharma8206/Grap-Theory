function ibfs(graph,node){
  q = new queue();
  q.enqueue(node);
  graph.vertices[node].visited=true;
  cy.getElementById(node).addClass('visited');

}

function dobfs(graph){
  if(q.isEmpty()){
    return true;
  }
  else{
    console.log(q.front());
    var v = graph.vertices[q.front()].child;
    var s = q.front();
    q.dequeue();
    console.log("popped" + s);
    for(var i=0;i<v.length;i++){
      if(!v[i].visited){
        q.enqueue(v[i].id);
        v[i].visited=true;
        cy.getElementById(v[i].id).addClass('visited');
        for(var j=0;j<graph.vertices[s].edge.length;j++){
            graph.vertices[s].edge[j].visited=true;
            cy.getElementById("e"+graph.vertices[s].edge[j].id).addClass('evisited');
        }
      }
      else{
        console.log("eAlreadyvisited");
        for(var j=0;j<graph.vertices[s].edge.length;j++){
          graph.vertices[s].edge[j].visited=true;
          cy.getElementById("e"+graph.vertices[s].edge[j].id).addClass('eAlreadyvisited');
        }
      }
      }

  }
  return false;
}

var start = function(){
  if(dobfs(g)){

  }
  else{
    console.log("rani");
    setTimeout(start,1000);
  }
}

ibfs(g,0);
