module.exports= function($scope, $state, TestService){
		console.log('enter controller_986')
		$scope.test = TestService.getTest()
	}
