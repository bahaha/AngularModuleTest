module.exports= function($scope, $state, TestService){
		console.log('enter controller_571')
		$scope.test = TestService.getTest()
	}
