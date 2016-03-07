module.exports= function($scope, $state, TestService){
		console.log('enter controller_226')
		$scope.test = TestService.getTest()
	}
