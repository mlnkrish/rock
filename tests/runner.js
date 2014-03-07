require.config({
  baseUrl: ".."
});

require(["tests/rock-test"],
  function(){
    jasmine.runTests();
  });
