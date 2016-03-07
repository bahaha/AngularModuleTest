module.exports= function($scope, $state, TestService){
		console.log('enter controller_979')
		$scope.test = TestService.getTest()
	}
