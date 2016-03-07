module.exports= function($scope, $state, TestService){
		console.log('enter controller_966')
		$scope.test = TestService.getTest()
	}
