module.exports= function($scope, $state, TestService){
		console.log('enter controller_274')
		$scope.test = TestService.getTest()
	}
