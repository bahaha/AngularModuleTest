module.exports= function($scope, $state, TestService){
		console.log('enter controller_549')
		$scope.test = TestService.getTest()
	}
