module.exports= function($scope, $state, TestService){
		console.log('enter controller_495')
		$scope.test = TestService.getTest()
	}
