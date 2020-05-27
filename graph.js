
// Instantiate a new graph
var Graph = function() {
    this.nodes = {};
  };
  
  var GraphNode = function (value) {
      this.value = value;
      this.edges = {};
  }
  
  // Add a node to the graph, passing in the node's value.
  Graph.prototype.addNode = function(value) {
    //add a new node with value as value to this.nodes
    var newNode = new GraphNode(value);
    this.nodes[value] = newNode;
  };
  
  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  Graph.prototype.contains = function(value) {
    //if value is a key in this.nodes
    if(this.nodes[value] === undefined){
      return false;
    } else{
      return true;
    }
      //if so return true
    //if not return false
  };
  
  // Removes a node from the graph.
  Graph.prototype.removeNode = function(value) {
    var targetNode = this.nodes[value];
    //for in tempNode.edges
    for(var key in targetNode.edges){
      //set homingNode var to object found in forloop
      var homieNode = targetNode.edges[key];
      //delete targetNode from homingNode.edges
      this.removeEdge(targetNode.value, homieNode.value);
    }
  
    delete this.nodes[value];
  };
  
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  Graph.prototype.hasEdge = function(fromValue, toValue) {
    var fromNode = this.nodes[fromValue];
    var toNode = this.nodes[toValue];
    if(fromNode === undefined || toNode === undefined){
      return false;
    }
    //if fromNode is in toNode's edges AND toNode is in fromNodes' Edges
    if(!(toNode.edges[fromValue] === undefined) && !(fromNode.edges[toValue] === undefined)){
      return true;
    }
      //return true
      else{
        return false;
      }
    //else return false
  
  };
  
  // Connects two nodes in a graph by adding an edge between them.
  Graph.prototype.addEdge = function(fromValue, toValue) {
    var fromNode = this.nodes[fromValue];
    var toNode = this.nodes[toValue];
    if(fromNode && toNode){
      fromNode.edges[toValue] = toNode;
      toNode.edges[fromValue] = fromNode;
    }
  
  };
  
  // Remove an edge between any two specified (by value) nodes.
  Graph.prototype.removeEdge = function(fromValue, toValue) {
    //remove fromValue object and toValue object from both edge objects
    var fromNode = this.nodes[fromValue];
    var toNode = this.nodes[toValue];
    delete fromNode.edges[toValue];
    delete toNode.edges[fromValue];
  
  };
  
  // Pass in a callback which will be executed on each node of the graph.
  Graph.prototype.forEachNode = function(cb) {
    //for each node in graph
    for(var key in this.nodes){
      //cd(node)
      cb(this.nodes[key]);
    }
  };
  
  /*
   * Complexity: What is the time complexity of the above functions?
   */