module.exports= function($scope, $state, TestService){
		console.log('enter controller_329')
		$scope.test = TestService.getTest()
	}
