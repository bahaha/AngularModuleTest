module.exports= function($scope, $state, TestService){
		console.log('enter controller_651')
		$scope.test = TestService.getTest()
	}
