/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('noteApp').services('noteStorage', function () {
 	var STORAGE_ID = 'notes';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (notes) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(notes));
		}
	};
});
