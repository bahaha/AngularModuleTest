module.exports= function($scope, $state, TestService){
		console.log('enter controller_162')
		$scope.test = TestService.getTest()
	}
