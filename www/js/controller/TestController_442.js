module.exports= function($scope, $state, TestService){
		console.log('enter controller_442')
		$scope.test = TestService.getTest()
	}
