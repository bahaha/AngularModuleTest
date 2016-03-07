module.exports= function($scope, $state, TestService){
		console.log('enter controller_309')
		$scope.test = TestService.getTest()
	}
