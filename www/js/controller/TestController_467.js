module.exports= function($scope, $state, TestService){
		console.log('enter controller_467')
		$scope.test = TestService.getTest()
	}
