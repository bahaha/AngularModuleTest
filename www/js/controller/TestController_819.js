module.exports= function($scope, $state, TestService){
		console.log('enter controller_819')
		$scope.test = TestService.getTest()
	}
