module.exports= function($scope, $state, TestService){
		console.log('enter controller_96')
		$scope.test = TestService.getTest()
	}
