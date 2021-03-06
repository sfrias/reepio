/**
 * Copyright (C) 2014 reep.io 
 * KodeKraftwerk (https://github.com/KodeKraftwerk/)
 *
 * reep.io source - In-browser peer-to-peer file transfer and streaming 
 * made easy
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
(function() {
	'use strict';

	angular.module('common')
		.controller('DialogController', ['$scope', '$element', '$rootScope', function($scope, $element, $rootScope){
			$rootScope.muteDialogs = false;

			$rootScope.$on('error', function(err, title, message) {
				$scope.title = title;
				$scope.message = message;

				$scope.visible = true;
			});
			
			$rootScope.showDialog = function(title, message) {
				$scope.title = title;
				$scope.message = message;

				$scope.visible = true;				
			};

			$scope.$watch('visible', function(newValue) {
				if(typeof newValue === 'undefined')
					return;

				if($rootScope.muteDialogs === true)
					return;

				$element.modal({
					show: newValue
				});
			});

			$rootScope.$watch('muteDialogs', function(newValue) {
				if(typeof newValue === 'undefined')
					return;

				if(newValue === true)
				{
					$element.modal({
						show: false
					});
				}
			});
		}]);
})();