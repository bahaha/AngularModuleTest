module.exports= function($scope, $state, TestService){
		console.log('enter controller_567')
		$scope.test = TestService.getTest()
	}
