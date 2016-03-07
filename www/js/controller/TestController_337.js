module.exports= function($scope, $state, TestService){
		console.log('enter controller_337')
		$scope.test = TestService.getTest()
	}
