module.exports= function($scope, $state, TestService){
		console.log('enter controller_981')
		$scope.test = TestService.getTest()
	}
