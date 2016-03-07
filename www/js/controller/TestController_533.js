module.exports= function($scope, $state, TestService){
		console.log('enter controller_533')
		$scope.test = TestService.getTest()
	}
