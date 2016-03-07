module.exports= function($scope, $state, TestService){
		console.log('enter controller_410')
		$scope.test = TestService.getTest()
	}
