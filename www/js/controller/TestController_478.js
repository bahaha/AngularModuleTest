module.exports= function($scope, $state, TestService){
		console.log('enter controller_478')
		$scope.test = TestService.getTest()
	}
