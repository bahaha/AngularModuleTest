module.exports= function($scope, $state, TestService){
		console.log('enter controller_321')
		$scope.test = TestService.getTest()
	}
