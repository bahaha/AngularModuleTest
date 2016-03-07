module.exports= function($scope, $state, TestService){
		console.log('enter controller_497')
		$scope.test = TestService.getTest()
	}
