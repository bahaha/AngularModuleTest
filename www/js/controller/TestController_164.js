module.exports= function($scope, $state, TestService){
		console.log('enter controller_164')
		$scope.test = TestService.getTest()
	}
