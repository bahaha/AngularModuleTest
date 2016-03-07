module.exports= function($scope, $state, TestService){
		console.log('enter controller_229')
		$scope.test = TestService.getTest()
	}
