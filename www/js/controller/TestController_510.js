module.exports= function($scope, $state, TestService){
		console.log('enter controller_510')
		$scope.test = TestService.getTest()
	}
