module.exports= function($scope, $state, TestService){
		console.log('enter controller_25')
		$scope.test = TestService.getTest()
	}
