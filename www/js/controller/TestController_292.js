module.exports= function($scope, $state, TestService){
		console.log('enter controller_292')
		$scope.test = TestService.getTest()
	}
