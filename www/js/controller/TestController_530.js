module.exports= function($scope, $state, TestService){
		console.log('enter controller_530')
		$scope.test = TestService.getTest()
	}
