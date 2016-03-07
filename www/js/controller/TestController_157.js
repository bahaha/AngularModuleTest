module.exports= function($scope, $state, TestService){
		console.log('enter controller_157')
		$scope.test = TestService.getTest()
	}
