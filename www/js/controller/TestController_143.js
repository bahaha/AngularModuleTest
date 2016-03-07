module.exports= function($scope, $state, TestService){
		console.log('enter controller_143')
		$scope.test = TestService.getTest()
	}
