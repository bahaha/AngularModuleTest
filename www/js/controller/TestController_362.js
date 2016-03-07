module.exports= function($scope, $state, TestService){
		console.log('enter controller_362')
		$scope.test = TestService.getTest()
	}
