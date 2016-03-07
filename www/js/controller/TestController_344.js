module.exports= function($scope, $state, TestService){
		console.log('enter controller_344')
		$scope.test = TestService.getTest()
	}
