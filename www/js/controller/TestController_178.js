module.exports= function($scope, $state, TestService){
		console.log('enter controller_178')
		$scope.test = TestService.getTest()
	}
