//where our iterators live
var o_o = {
  each: function(list, callback) {
    for (var i = 0; i < list.length; i++){
      var element = list[i];
      callback(element);
    }
  },
  map: function(list, callback){
    var output = [];
      for (var i = 0; i < list.length; i++){
        output[i] = callback(list[i]);
      }
      return output;
  },
  filter: function(list, callback) {
    //code here...
  }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;
