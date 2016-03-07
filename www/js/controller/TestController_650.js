module.exports= function($scope, $state, TestService){
		console.log('enter controller_650')
		$scope.test = TestService.getTest()
	}
