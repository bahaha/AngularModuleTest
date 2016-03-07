module.exports= function($scope, $state, TestService){
		console.log('enter controller_834')
		$scope.test = TestService.getTest()
	}
