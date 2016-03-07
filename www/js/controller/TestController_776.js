module.exports= function($scope, $state, TestService){
		console.log('enter controller_776')
		$scope.test = TestService.getTest()
	}
