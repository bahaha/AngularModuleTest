module.exports= function($scope, $state, TestService){
		console.log('enter controller_429')
		$scope.test = TestService.getTest()
	}
