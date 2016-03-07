module.exports= function($scope, $state, TestService){
		console.log('enter controller_210')
		$scope.test = TestService.getTest()
	}
