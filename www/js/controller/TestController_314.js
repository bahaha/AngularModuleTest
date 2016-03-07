module.exports= function($scope, $state, TestService){
		console.log('enter controller_314')
		$scope.test = TestService.getTest()
	}
