module.exports= function($scope, $state, TestService){
		console.log('enter controller_400')
		$scope.test = TestService.getTest()
	}
