module.exports= function($scope, $state, TestService){
		console.log('enter controller_960')
		$scope.test = TestService.getTest()
	}
