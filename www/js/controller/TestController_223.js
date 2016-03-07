module.exports= function($scope, $state, TestService){
		console.log('enter controller_223')
		$scope.test = TestService.getTest()
	}
