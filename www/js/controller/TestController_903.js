module.exports= function($scope, $state, TestService){
		console.log('enter controller_903')
		$scope.test = TestService.getTest()
	}
