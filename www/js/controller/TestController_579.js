module.exports= function($scope, $state, TestService){
		console.log('enter controller_579')
		$scope.test = TestService.getTest()
	}
