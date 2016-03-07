module.exports= function($scope, $state, TestService){
		console.log('enter controller_413')
		$scope.test = TestService.getTest()
	}
