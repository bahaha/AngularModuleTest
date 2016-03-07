module.exports= function($scope, $state, TestService){
		console.log('enter controller_702')
		$scope.test = TestService.getTest()
	}
