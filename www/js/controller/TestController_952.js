module.exports= function($scope, $state, TestService){
		console.log('enter controller_952')
		$scope.test = TestService.getTest()
	}
