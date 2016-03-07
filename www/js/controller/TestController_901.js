module.exports= function($scope, $state, TestService){
		console.log('enter controller_901')
		$scope.test = TestService.getTest()
	}
