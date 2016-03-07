module.exports= function($scope, $state, TestService){
		console.log('enter controller_460')
		$scope.test = TestService.getTest()
	}
