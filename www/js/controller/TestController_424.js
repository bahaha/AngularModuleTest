module.exports= function($scope, $state, TestService){
		console.log('enter controller_424')
		$scope.test = TestService.getTest()
	}
