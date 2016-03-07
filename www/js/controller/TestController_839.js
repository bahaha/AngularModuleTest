module.exports= function($scope, $state, TestService){
		console.log('enter controller_839')
		$scope.test = TestService.getTest()
	}
