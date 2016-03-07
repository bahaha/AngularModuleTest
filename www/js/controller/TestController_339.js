module.exports= function($scope, $state, TestService){
		console.log('enter controller_339')
		$scope.test = TestService.getTest()
	}
