module.exports= function($scope, $state, TestService){
		console.log('enter controller_483')
		$scope.test = TestService.getTest()
	}
