module.exports= function($scope, $state, TestService){
		console.log('enter controller_572')
		$scope.test = TestService.getTest()
	}
