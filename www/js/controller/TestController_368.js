module.exports= function($scope, $state, TestService){
		console.log('enter controller_368')
		$scope.test = TestService.getTest()
	}
