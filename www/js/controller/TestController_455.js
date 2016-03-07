module.exports= function($scope, $state, TestService){
		console.log('enter controller_455')
		$scope.test = TestService.getTest()
	}
