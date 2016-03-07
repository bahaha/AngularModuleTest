module.exports= function($scope, $state, TestService){
		console.log('enter controller_875')
		$scope.test = TestService.getTest()
	}
