module.exports= function($scope, $state, TestService){
		console.log('enter controller_9')
		$scope.test = TestService.getTest()
	}
