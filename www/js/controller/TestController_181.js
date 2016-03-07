module.exports= function($scope, $state, TestService){
		console.log('enter controller_181')
		$scope.test = TestService.getTest()
	}
