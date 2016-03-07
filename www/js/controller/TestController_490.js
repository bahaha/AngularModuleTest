module.exports= function($scope, $state, TestService){
		console.log('enter controller_490')
		$scope.test = TestService.getTest()
	}
