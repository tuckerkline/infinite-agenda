angular.module('myApp', [])

var mainControllerFunc = function($scope) {
	$scope.days = []

	for (var i =0 ; i < 25; i++){
		var currentDate = new Date();
    	currentDate.setDate(currentDate.getDate()+ i);
    	currentDate.appointments = []
    	$scope.days.push(currentDate)
	}

	$scope.addAppointment = function(index) {
		$scope.addedApt = prompt('Add your appointment name here')
		$scope.days[index].appointments.push($scope.addedApt)
	}	
}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])