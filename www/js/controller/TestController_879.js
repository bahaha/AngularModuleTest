module.exports= function($scope, $state, TestService){
		console.log('enter controller_879')
		$scope.test = TestService.getTest()
	}
