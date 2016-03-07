module.exports= function($scope, $state, TestService){
		console.log('enter controller_265')
		$scope.test = TestService.getTest()
	}
