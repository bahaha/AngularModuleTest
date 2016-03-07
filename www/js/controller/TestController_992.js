module.exports= function($scope, $state, TestService){
		console.log('enter controller_992')
		$scope.test = TestService.getTest()
	}
