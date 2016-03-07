module.exports= function($scope, $state, TestService){
		console.log('enter controller_943')
		$scope.test = TestService.getTest()
	}
