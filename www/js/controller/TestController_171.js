module.exports= function($scope, $state, TestService){
		console.log('enter controller_171')
		$scope.test = TestService.getTest()
	}
