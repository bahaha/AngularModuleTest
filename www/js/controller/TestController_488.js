module.exports= function($scope, $state, TestService){
		console.log('enter controller_488')
		$scope.test = TestService.getTest()
	}
