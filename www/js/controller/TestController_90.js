module.exports= function($scope, $state, TestService){
		console.log('enter controller_90')
		$scope.test = TestService.getTest()
	}
