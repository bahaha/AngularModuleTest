module.exports= function($scope, $state, TestService){
		console.log('enter controller_298')
		$scope.test = TestService.getTest()
	}
