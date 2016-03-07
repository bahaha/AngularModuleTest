module.exports= function($scope, $state, TestService){
		console.log('enter controller_847')
		$scope.test = TestService.getTest()
	}
