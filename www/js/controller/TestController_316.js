module.exports= function($scope, $state, TestService){
		console.log('enter controller_316')
		$scope.test = TestService.getTest()
	}
