angular.module('myApp', ['infinite-scroll'])

var mainControllerFunc = function($scope, $event) {
	$scope.days = []

	$scope.getDays = function() {
		for (var i = 0 ; i < 10; i++){
			var currentDate = new Date();
	    	currentDate.setDate(currentDate.getDate()+ i);
	    	currentDate.appointments = []
	    	$scope.days.push(currentDate)
		}
	}
	$scope.getDays();

	$scope.a = 10
	$scope.b = 15
	$scope.getMoreDays = function(a, b) {
		for (var i = a ; i < b; i++){
			var currentDate = new Date();
	    	currentDate.setDate(currentDate.getDate()+ i);
	    	currentDate.appointments = []
	    	$scope.days.push(currentDate)
		    $scope.a++
		    $scope.b++	 	
		}
	}

	$scope.addAppointment = function(index) {
		$scope.addedApt = prompt('Add your appointment name here')
		if ($scope.addedApt == '') {
			$scope.addedApt = "Empty Appt"
		}
		$scope.days[index].appointments.push($scope.addedApt)
	}

	$scope.delete = function(index, day) {
		day.appointments.splice(index, 1)
	}

	$scope.toEdit = function(index2, index, day) {
		var edit = prompt("Edit your note");
		$scope.days[index2].appointments[index] = edit

		console.log('hi')

	}

}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])