(function (){
  var rock;

  var _rock = function(){
    
  }
  
  rock = new _rock();

  if (typeof define === 'function' && define.amd) {
    define('Rock', [], function() {
      return rock;
    });
  }
}).call(this)