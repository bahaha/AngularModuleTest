module.exports= function($scope, $state, TestService){
		console.log('enter controller_317')
		$scope.test = TestService.getTest()
	}
