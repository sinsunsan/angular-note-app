'use strict';

angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.notes = [
      {
        'title' : 'My first note',
        'desc' : 'Note text here',
        'date' : '08/09/2013'
      }
    ];
  });
