module.exports= function($scope, $state, TestService){
		console.log('enter controller_714')
		$scope.test = TestService.getTest()
	}
