module.exports= function($scope, $state, TestService){
		console.log('enter controller_498')
		$scope.test = TestService.getTest()
	}
