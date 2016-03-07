module.exports= function($scope, $state, TestService){
		console.log('enter controller_342')
		$scope.test = TestService.getTest()
	}
