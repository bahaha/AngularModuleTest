module.exports= function($scope, $state, TestService){
		console.log('enter controller_374')
		$scope.test = TestService.getTest()
	}
