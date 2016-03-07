module.exports= function($scope, $state, TestService){
		console.log('enter controller_585')
		$scope.test = TestService.getTest()
	}
