module.exports= function($scope, $state, TestService){
		console.log('enter controller_920')
		$scope.test = TestService.getTest()
	}
