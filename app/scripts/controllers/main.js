'use strict';

angular.module('noteApp').controller('MainCtrl', function ($scope) {
  
  // Default note
  var noteBase = [{ 
    'id' : 0,
    'title' : 'Ma première note',
    'desc' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'date' : '08/09/2013'
  }];
  //$scope.notes = noteBase;
  
  var notes = $scope.notes = noteBase;
  
 
  //var notes = $scope.notes = noteStorage.get();
  //console.log(notes1);
  
  // Input form to submit a new note
  $scope.newNote = {
    'title': '', 
    'desc': '',
    'date': ''
  };
  
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
    console.log($scope.newNote);
    var newNote = {
      'id': 1,
      'title' : $scope.newNote.title.trim(), 
      'desc' : $scope.newNote.desc.trim(), 
      'date' : ''
    }
    console.log(newNote);
  
    /*
		if (!newNote.length) {
			return;
		}
		*/
		
		// We add the new notes to $scope.notes
		notes.push(
      newNote
  	);
  	
  	console.log(notes);
  	
		// We empty the new note input field
		$scope.newNote = '';
		
	};  	
});



