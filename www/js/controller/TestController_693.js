module.exports= function($scope, $state, TestService){
		console.log('enter controller_693')
		$scope.test = TestService.getTest()
	}
