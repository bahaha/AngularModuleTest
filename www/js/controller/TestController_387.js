module.exports= function($scope, $state, TestService){
		console.log('enter controller_387')
		$scope.test = TestService.getTest()
	}
