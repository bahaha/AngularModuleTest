module.exports= function($scope, $state, TestService){
		console.log('enter controller_491')
		$scope.test = TestService.getTest()
	}
