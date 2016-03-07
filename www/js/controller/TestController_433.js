module.exports= function($scope, $state, TestService){
		console.log('enter controller_433')
		$scope.test = TestService.getTest()
	}
