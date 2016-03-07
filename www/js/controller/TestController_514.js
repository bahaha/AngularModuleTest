module.exports= function($scope, $state, TestService){
		console.log('enter controller_514')
		$scope.test = TestService.getTest()
	}
