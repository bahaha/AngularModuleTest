module.exports= function($scope, $state, TestService){
		console.log('enter controller_687')
		$scope.test = TestService.getTest()
	}
