module.exports= function($scope, $state, TestService){
		console.log('enter controller_417')
		$scope.test = TestService.getTest()
	}
