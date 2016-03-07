module.exports= function($scope, $state, TestService){
		console.log('enter controller_939')
		$scope.test = TestService.getTest()
	}
