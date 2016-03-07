module.exports= function($scope, $state, TestService){
		console.log('enter controller_299')
		$scope.test = TestService.getTest()
	}
