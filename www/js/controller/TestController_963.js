module.exports= function($scope, $state, TestService){
		console.log('enter controller_963')
		$scope.test = TestService.getTest()
	}
