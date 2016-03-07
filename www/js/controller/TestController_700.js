module.exports= function($scope, $state, TestService){
		console.log('enter controller_700')
		$scope.test = TestService.getTest()
	}
