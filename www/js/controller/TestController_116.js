module.exports= function($scope, $state, TestService){
		console.log('enter controller_116')
		$scope.test = TestService.getTest()
	}
