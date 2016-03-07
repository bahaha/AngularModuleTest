module.exports= function($scope, $state, TestService){
		console.log('enter controller_902')
		$scope.test = TestService.getTest()
	}
