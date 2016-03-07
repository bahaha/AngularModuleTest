module.exports= function($scope, $state, TestService){
		console.log('enter controller_154')
		$scope.test = TestService.getTest()
	}
