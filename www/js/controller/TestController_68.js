module.exports= function($scope, $state, TestService){
		console.log('enter controller_68')
		$scope.test = TestService.getTest()
	}
