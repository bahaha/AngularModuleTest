module.exports= function($scope, $state, TestService){
		console.log('enter controller_398')
		$scope.test = TestService.getTest()
	}
