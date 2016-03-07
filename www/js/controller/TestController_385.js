module.exports= function($scope, $state, TestService){
		console.log('enter controller_385')
		$scope.test = TestService.getTest()
	}
