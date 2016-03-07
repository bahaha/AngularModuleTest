module.exports= function($scope, $state, TestService){
		console.log('enter controller_175')
		$scope.test = TestService.getTest()
	}
