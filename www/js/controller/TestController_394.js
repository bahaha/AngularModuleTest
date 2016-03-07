module.exports= function($scope, $state, TestService){
		console.log('enter controller_394')
		$scope.test = TestService.getTest()
	}
