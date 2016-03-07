module.exports= function($scope, $state, TestService){
		console.log('enter controller_89')
		$scope.test = TestService.getTest()
	}
