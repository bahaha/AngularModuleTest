module.exports= function($scope, $state, TestService){
		console.log('enter controller_600')
		$scope.test = TestService.getTest()
	}
