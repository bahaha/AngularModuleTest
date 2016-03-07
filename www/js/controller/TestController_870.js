module.exports= function($scope, $state, TestService){
		console.log('enter controller_870')
		$scope.test = TestService.getTest()
	}
