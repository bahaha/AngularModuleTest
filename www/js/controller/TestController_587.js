module.exports= function($scope, $state, TestService){
		console.log('enter controller_587')
		$scope.test = TestService.getTest()
	}
