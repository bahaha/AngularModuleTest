module.exports= function($scope, $state, TestService){
		console.log('enter controller_857')
		$scope.test = TestService.getTest()
	}
