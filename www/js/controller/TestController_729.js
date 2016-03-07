module.exports= function($scope, $state, TestService){
		console.log('enter controller_729')
		$scope.test = TestService.getTest()
	}
