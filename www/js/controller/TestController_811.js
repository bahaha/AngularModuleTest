module.exports= function($scope, $state, TestService){
		console.log('enter controller_811')
		$scope.test = TestService.getTest()
	}
