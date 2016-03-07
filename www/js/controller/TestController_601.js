module.exports= function($scope, $state, TestService){
		console.log('enter controller_601')
		$scope.test = TestService.getTest()
	}
