module.exports= function($scope, $state, TestService){
		console.log('enter controller_679')
		$scope.test = TestService.getTest()
	}
