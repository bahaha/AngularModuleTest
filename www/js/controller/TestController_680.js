module.exports= function($scope, $state, TestService){
		console.log('enter controller_680')
		$scope.test = TestService.getTest()
	}
