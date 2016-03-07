module.exports= function($scope, $state, TestService){
		console.log('enter controller_556')
		$scope.test = TestService.getTest()
	}
