module.exports= function($scope, $state, TestService){
		console.log('enter controller_441')
		$scope.test = TestService.getTest()
	}
