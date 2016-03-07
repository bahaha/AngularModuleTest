module.exports= function($scope, $state, TestService){
		console.log('enter controller_237')
		$scope.test = TestService.getTest()
	}
