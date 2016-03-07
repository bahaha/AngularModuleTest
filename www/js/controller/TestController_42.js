module.exports= function($scope, $state, TestService){
		console.log('enter controller_42')
		$scope.test = TestService.getTest()
	}
