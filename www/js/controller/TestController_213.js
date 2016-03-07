module.exports= function($scope, $state, TestService){
		console.log('enter controller_213')
		$scope.test = TestService.getTest()
	}
