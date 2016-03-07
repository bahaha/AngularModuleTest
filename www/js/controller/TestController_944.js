module.exports= function($scope, $state, TestService){
		console.log('enter controller_944')
		$scope.test = TestService.getTest()
	}
