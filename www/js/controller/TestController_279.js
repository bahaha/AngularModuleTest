module.exports= function($scope, $state, TestService){
		console.log('enter controller_279')
		$scope.test = TestService.getTest()
	}
