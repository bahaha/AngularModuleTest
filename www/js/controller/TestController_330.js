module.exports= function($scope, $state, TestService){
		console.log('enter controller_330')
		$scope.test = TestService.getTest()
	}
