module.exports= function($scope, $state, TestService){
		console.log('enter controller_597')
		$scope.test = TestService.getTest()
	}
