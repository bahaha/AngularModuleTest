module.exports= function($scope, $state, TestService){
		console.log('enter controller_858')
		$scope.test = TestService.getTest()
	}
