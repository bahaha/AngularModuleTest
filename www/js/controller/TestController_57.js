module.exports= function($scope, $state, TestService){
		console.log('enter controller_57')
		$scope.test = TestService.getTest()
	}
