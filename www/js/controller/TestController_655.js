module.exports= function($scope, $state, TestService){
		console.log('enter controller_655')
		$scope.test = TestService.getTest()
	}
