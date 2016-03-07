module.exports= function($scope, $state, TestService){
		console.log('enter controller_797')
		$scope.test = TestService.getTest()
	}
