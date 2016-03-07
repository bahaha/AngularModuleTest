module.exports= function($scope, $state, TestService){
		console.log('enter controller_869')
		$scope.test = TestService.getTest()
	}
