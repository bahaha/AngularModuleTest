module.exports= function($scope, $state, TestService){
		console.log('enter controller_713')
		$scope.test = TestService.getTest()
	}
