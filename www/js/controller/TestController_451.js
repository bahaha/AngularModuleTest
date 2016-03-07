module.exports= function($scope, $state, TestService){
		console.log('enter controller_451')
		$scope.test = TestService.getTest()
	}
