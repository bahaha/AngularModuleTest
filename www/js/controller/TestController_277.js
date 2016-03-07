module.exports= function($scope, $state, TestService){
		console.log('enter controller_277')
		$scope.test = TestService.getTest()
	}
