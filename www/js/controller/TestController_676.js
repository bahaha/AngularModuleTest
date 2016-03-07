module.exports= function($scope, $state, TestService){
		console.log('enter controller_676')
		$scope.test = TestService.getTest()
	}
