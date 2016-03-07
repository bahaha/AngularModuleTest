module.exports= function($scope, $state, TestService){
		console.log('enter controller_437')
		$scope.test = TestService.getTest()
	}
