module.exports= function($scope, $state, TestService){
		console.log('enter controller_150')
		$scope.test = TestService.getTest()
	}
