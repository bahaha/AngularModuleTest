module.exports= function($scope, $state, TestService){
		console.log('enter controller_793')
		$scope.test = TestService.getTest()
	}
