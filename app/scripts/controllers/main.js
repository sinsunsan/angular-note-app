'use strict';

angular.module('noteApp').controller('MainCtrl', function ($scope) {
  
   console.log($scope);
  // Default note
   $scope.notes = [
      {
        'title' : 'My first note',
        'desc' : 'Note text here',
        'date' : '08/09/2013'
      }
    ];
      
    //var notes = $scope.notes = noteStorage.get();
    //console.log(notes1);
    
    // Input form to submit a new note
    $scope.newNote = '';
  	
    
    $scope.addTodo = function () {
  		var newTodo = $scope.newTodo.trim();
  		if (!newTodo.length) {
  			return;
  		}

  		todos.push({
  			title: newTodo,
  			completed: false
  		});

  		$scope.newTodo = '';
  	};
    
    // Add a note when the button is clicked
    $scope.addNote = function () {
      console.log('new todo called');
      var newNote = $scope.newNote.trim();
  		if (!newNote.length) {
  			return;
  		}
  		
  		// We empty the new note input field
  		$scope.newNote = '';
  		
  	};
  	
  });



