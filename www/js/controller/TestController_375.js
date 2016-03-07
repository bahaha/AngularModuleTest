module.exports= function($scope, $state, TestService){
		console.log('enter controller_375')
		$scope.test = TestService.getTest()
	}
