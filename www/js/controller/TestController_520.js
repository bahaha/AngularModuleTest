module.exports= function($scope, $state, TestService){
		console.log('enter controller_520')
		$scope.test = TestService.getTest()
	}
