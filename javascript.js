angular.module('myApp', ['infinite-scroll'])

var mainControllerFunc = function($scope) {
	$scope.days = []

	$scope.getDays = function() {
		for (var i =0 ; i < 10; i++){
			var currentDate = new Date();
	    	currentDate.setDate(currentDate.getDate()+ i);
	    	currentDate.appointments = []
	    	$scope.days.push(currentDate)
		}
	}

	$scope.getDays();

	$scope.addAppointment = function(index) {
		$scope.addedApt = prompt('Add your appointment name here')
		$scope.days[index].appointments.push($scope.addedApt)
	}
	$scope.delete = function(index, day) {
		day.appointments.splice(index, 1)
	}
	$scope.toEdit = function(index) {
		
	}
	

}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])