module.exports= function($scope, $state, TestService){
		console.log('enter controller_318')
		$scope.test = TestService.getTest()
	}
