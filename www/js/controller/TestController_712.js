module.exports= function($scope, $state, TestService){
		console.log('enter controller_712')
		$scope.test = TestService.getTest()
	}
