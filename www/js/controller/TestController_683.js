module.exports= function($scope, $state, TestService){
		console.log('enter controller_683')
		$scope.test = TestService.getTest()
	}
