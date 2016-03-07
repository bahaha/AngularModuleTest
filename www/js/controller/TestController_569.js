module.exports= function($scope, $state, TestService){
		console.log('enter controller_569')
		$scope.test = TestService.getTest()
	}
