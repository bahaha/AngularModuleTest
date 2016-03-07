module.exports= function($scope, $state, TestService){
		console.log('enter controller_494')
		$scope.test = TestService.getTest()
	}
