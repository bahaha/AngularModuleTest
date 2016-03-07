module.exports= function($scope, $state, TestService){
		console.log('enter controller_908')
		$scope.test = TestService.getTest()
	}
