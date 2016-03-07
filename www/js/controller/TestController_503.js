module.exports= function($scope, $state, TestService){
		console.log('enter controller_503')
		$scope.test = TestService.getTest()
	}
