(function () {
  "use strict";

  angular.module("mock_app").controller("testCtrl", function($scope, $http) {
    function setup() {
      $http.get('/posts.json').then(function(response){
        $scope.posts = response.data;
      });
    }
    setup();

    window.onload = function(){
      var elements = document.getElementsByClassName("tag-words"); //figure out a way to highlight whole word.
      for (var i=0; i<elements.length; i++){
        elements[i].innerHTML = elements[i].innerHTML.replace(/[@]/gim, "<span class='tag'>@</span>");
        elements[i].innerHTML = elements[i].innerHTML.replace(/[#]/gim, "<span class='tag'>#</span>");
        elements[i].innerHTML = elements[i].innerHTML.replace(/http/gim, "<span class='tag'>http</span>");
      }
    };

    $(function(){ //resize the pins and adjust the function below to show only 3 pins per page and click load more to view more.
    $("p").slice(0, 3).show();
    $("#load").click(function(e){
        e.preventDefault();
        $("p:hidden").slice(0, 3).show();
        if($("p:hidden").length === 0){
            alert("Nothing more to see here!");
        }
    });
});
  });
})();
