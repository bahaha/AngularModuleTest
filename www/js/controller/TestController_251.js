module.exports= function($scope, $state, TestService){
		console.log('enter controller_251')
		$scope.test = TestService.getTest()
	}
