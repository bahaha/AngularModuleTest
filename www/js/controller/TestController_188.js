module.exports= function($scope, $state, TestService){
		console.log('enter controller_188')
		$scope.test = TestService.getTest()
	}
