'use strict';

angular.module('noteApp')
  .controller('MainCtrl', function ($scope) {
    console.log($scope);
    
    $scope.notes = [
      {
        'title' : 'My first note',
        'desc' : 'Note text here',
        'date' : '08/09/2013'
      }
    ];
    
    // Add a note when the button is clicked
    $scope.addNote = function () {
      console.log('new todo called');
      /*
  		var newTodo = $scope.newTodo.trim();
  		if (!newTodo.length) {
  			return;
  		}

  		todos.push({
  			title: newTodo,
  			completed: false
  		});

  		$scope.newTodo = '';
  		*/
  	};
  	
  });



