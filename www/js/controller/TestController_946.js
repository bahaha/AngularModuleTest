module.exports= function($scope, $state, TestService){
		console.log('enter controller_946')
		$scope.test = TestService.getTest()
	}
