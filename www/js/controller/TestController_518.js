module.exports= function($scope, $state, TestService){
		console.log('enter controller_518')
		$scope.test = TestService.getTest()
	}
