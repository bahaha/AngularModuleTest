module.exports= function($scope, $state, TestService){
		console.log('enter controller_294')
		$scope.test = TestService.getTest()
	}
