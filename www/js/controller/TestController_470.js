module.exports= function($scope, $state, TestService){
		console.log('enter controller_470')
		$scope.test = TestService.getTest()
	}
