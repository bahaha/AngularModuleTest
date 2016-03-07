module.exports= function($scope, $state, TestService){
		console.log('enter controller_197')
		$scope.test = TestService.getTest()
	}
