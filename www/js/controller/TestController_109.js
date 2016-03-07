module.exports= function($scope, $state, TestService){
		console.log('enter controller_109')
		$scope.test = TestService.getTest()
	}
