module.exports= function($scope, $state, TestService){
		console.log('enter controller_260')
		$scope.test = TestService.getTest()
	}
