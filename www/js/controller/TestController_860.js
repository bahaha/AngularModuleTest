module.exports= function($scope, $state, TestService){
		console.log('enter controller_860')
		$scope.test = TestService.getTest()
	}
