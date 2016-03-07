module.exports= function($scope, $state, TestService){
		console.log('enter controller_348')
		$scope.test = TestService.getTest()
	}
