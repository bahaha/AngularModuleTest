module.exports= function($scope, $state, TestService){
		console.log('enter controller_118')
		$scope.test = TestService.getTest()
	}
