module.exports= function($scope, $state, TestService){
		console.log('enter controller_551')
		$scope.test = TestService.getTest()
	}
