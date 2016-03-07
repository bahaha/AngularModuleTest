module.exports= function($scope, $state, TestService){
		console.log('enter controller_599')
		$scope.test = TestService.getTest()
	}
