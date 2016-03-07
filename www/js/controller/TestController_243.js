module.exports= function($scope, $state, TestService){
		console.log('enter controller_243')
		$scope.test = TestService.getTest()
	}
