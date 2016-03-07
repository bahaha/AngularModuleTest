module.exports= function($scope, $state, TestService){
		console.log('enter controller_32')
		$scope.test = TestService.getTest()
	}
