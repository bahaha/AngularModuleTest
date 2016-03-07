module.exports= function($scope, $state, TestService){
		console.log('enter controller_198')
		$scope.test = TestService.getTest()
	}
