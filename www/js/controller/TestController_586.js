module.exports= function($scope, $state, TestService){
		console.log('enter controller_586')
		$scope.test = TestService.getTest()
	}
