module.exports= function($scope, $state, TestService){
		console.log('enter controller_115')
		$scope.test = TestService.getTest()
	}
