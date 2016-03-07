module.exports= function($scope, $state, TestService){
		console.log('enter controller_950')
		$scope.test = TestService.getTest()
	}
