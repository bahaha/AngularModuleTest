module.exports= function($scope, $state, TestService){
		console.log('enter controller_370')
		$scope.test = TestService.getTest()
	}
