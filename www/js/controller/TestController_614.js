module.exports= function($scope, $state, TestService){
		console.log('enter controller_614')
		$scope.test = TestService.getTest()
	}
