module.exports= function($scope, $state, TestService){
		console.log('enter controller_372')
		$scope.test = TestService.getTest()
	}
