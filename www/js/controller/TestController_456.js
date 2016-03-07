module.exports= function($scope, $state, TestService){
		console.log('enter controller_456')
		$scope.test = TestService.getTest()
	}
