module.exports= function($scope, $state, TestService){
		console.log('enter controller_741')
		$scope.test = TestService.getTest()
	}
