module.exports= function($scope, $state, TestService){
		console.log('enter controller_479')
		$scope.test = TestService.getTest()
	}
