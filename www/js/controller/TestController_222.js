module.exports= function($scope, $state, TestService){
		console.log('enter controller_222')
		$scope.test = TestService.getTest()
	}
