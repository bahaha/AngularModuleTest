module.exports= function($scope, $state, TestService){
		console.log('enter controller_722')
		$scope.test = TestService.getTest()
	}
