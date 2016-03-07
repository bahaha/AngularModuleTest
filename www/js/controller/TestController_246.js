module.exports= function($scope, $state, TestService){
		console.log('enter controller_246')
		$scope.test = TestService.getTest()
	}
