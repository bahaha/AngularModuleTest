module.exports= function($scope, $state, TestService){
		console.log('enter controller_155')
		$scope.test = TestService.getTest()
	}
