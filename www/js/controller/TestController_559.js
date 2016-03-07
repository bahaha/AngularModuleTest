module.exports= function($scope, $state, TestService){
		console.log('enter controller_559')
		$scope.test = TestService.getTest()
	}
