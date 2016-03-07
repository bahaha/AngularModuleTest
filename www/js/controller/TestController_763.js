module.exports= function($scope, $state, TestService){
		console.log('enter controller_763')
		$scope.test = TestService.getTest()
	}
