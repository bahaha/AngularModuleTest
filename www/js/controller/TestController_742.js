module.exports= function($scope, $state, TestService){
		console.log('enter controller_742')
		$scope.test = TestService.getTest()
	}
