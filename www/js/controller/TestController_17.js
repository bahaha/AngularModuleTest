module.exports= function($scope, $state, TestService){
		console.log('enter controller_17')
		$scope.test = TestService.getTest()
	}
