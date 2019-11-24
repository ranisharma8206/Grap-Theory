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
    var v = graph.vertices[q.front()].child;
    var s = q.front();
    console.log("front element is:"+q.front());
    q.dequeue();
    for(var i=0;i<v.length;i++){
      console.log(i + "child of" +s+ "is:" + v[i].id);
      if(!v[i].visited){
        q.enqueue(v[i].id);
        v[i].visited = true;
        cy.getElementById(v[i].id).addClass('visited');
            //graph.vertices[s].edge[j].visited=true;
            cy.getElementById("e"+""+s+","+v[i].id).addClass('evisited');
            cy.getElementById("e"+""+v[i].id+","+s).addClass('evisited');
      }
    }

  }
  return false;
}

var start = function(){
  if(dobfs(g)){

  }
  else{
    console.log("starting again");
    setTimeout(start,1000);
  }
}
