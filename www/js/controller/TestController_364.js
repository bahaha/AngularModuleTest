module.exports= function($scope, $state, TestService){
		console.log('enter controller_364')
		$scope.test = TestService.getTest()
	}
