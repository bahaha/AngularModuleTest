module.exports= function($scope, $state, TestService){
		console.log('enter controller_101')
		$scope.test = TestService.getTest()
	}
