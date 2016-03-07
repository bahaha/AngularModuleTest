module.exports= function($scope, $state, TestService){
		console.log('enter controller_613')
		$scope.test = TestService.getTest()
	}
