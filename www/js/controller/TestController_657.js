module.exports= function($scope, $state, TestService){
		console.log('enter controller_657')
		$scope.test = TestService.getTest()
	}
