module.exports= function($scope, $state, TestService){
		console.log('enter controller_975')
		$scope.test = TestService.getTest()
	}
