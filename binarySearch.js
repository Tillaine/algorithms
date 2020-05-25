class BinarySearchTree  {
    constructor(value){
      this.left = null;
      this.right = null;
      this.leafList = [];
      this.value = value;
      }
  
  
  
  
    insert(value) {
      //make a leaf with value of value
      var leaf = new BinarySearchTree(value);
      this.leafList.push(leaf);
  
      var crawl = function(object){
        if(object === undefined){
          object = this;
        }
          if(value === object.value){
            return undefined;
          }
          //check if value is greater than this.value
          if(value > object.value){
          // is so, see if right child is null
            if(object.right === null){
              //if so add new leaf to this.right
              object.right = leaf;
            }
            else {
              return crawl(object.right);
            }
          }
          if(value < object.value){
            if(object.left === null){
              object.left = leaf;
            }
            else{
              return crawl(object.left);
            }
          }
  
      }
      crawl.call(this);
  
    }
  
  
  
  
  
  
  
    contains(value, object){
      //if object is undefined, set equal to this
      if(object === undefined){
        object = this;
      }
  
      //if value is equal to object.value
      if(value === object.value){
        //return true
        console.log(true);
        return true
      }
  
      //if value is greater than object.value
      if(value > object.value){
        //check if object.right is null
        if(object.right === null){
          //return false
          return false;
        }
        //call contains on (value, object.right)
        return this.contains(value, object.right);
      }
  
      //if value is less than object.value
      if(value < object.value){
        //check if object.left is null
        if(object.left === null){
          // if null, return false
          return false;
        }
        //call contains on (value, object.left)
         this.contains(value,object.left);
      }
    }
  
    depthFirstLog(cb){
      this.leafList.unshift(this)
      for(var i = 0; i < this.leafList.length; i++){
        cb(this.leafList[i].value);
      }
    }
  
  
  
  
  };