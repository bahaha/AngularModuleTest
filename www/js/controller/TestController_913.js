module.exports= function($scope, $state, TestService){
		console.log('enter controller_913')
		$scope.test = TestService.getTest()
	}
