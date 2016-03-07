module.exports= function($scope, $state, TestService){
		console.log('enter controller_843')
		$scope.test = TestService.getTest()
	}
