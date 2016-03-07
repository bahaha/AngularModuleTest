module.exports= function($scope, $state, TestService){
		console.log('enter controller_307')
		$scope.test = TestService.getTest()
	}
