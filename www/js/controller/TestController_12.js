module.exports= function($scope, $state, TestService){
		console.log('enter controller_12')
		$scope.test = TestService.getTest()
	}
