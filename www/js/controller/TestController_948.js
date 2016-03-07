module.exports= function($scope, $state, TestService){
		console.log('enter controller_948')
		$scope.test = TestService.getTest()
	}
