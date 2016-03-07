module.exports= function($scope, $state, TestService){
		console.log('enter controller_10')
		$scope.test = TestService.getTest()
	}
