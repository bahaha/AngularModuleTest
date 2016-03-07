module.exports= function($scope, $state, TestService){
		console.log('enter controller_703')
		$scope.test = TestService.getTest()
	}
