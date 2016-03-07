module.exports= function($scope, $state, TestService){
		console.log('enter controller_728')
		$scope.test = TestService.getTest()
	}
