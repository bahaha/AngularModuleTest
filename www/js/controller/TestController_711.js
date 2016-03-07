module.exports= function($scope, $state, TestService){
		console.log('enter controller_711')
		$scope.test = TestService.getTest()
	}
