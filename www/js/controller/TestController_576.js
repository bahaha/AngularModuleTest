module.exports= function($scope, $state, TestService){
		console.log('enter controller_576')
		$scope.test = TestService.getTest()
	}
