module.exports= function($scope, $state, TestService){
		console.log('enter controller_656')
		$scope.test = TestService.getTest()
	}
