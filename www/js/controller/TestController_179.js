module.exports= function($scope, $state, TestService){
		console.log('enter controller_179')
		$scope.test = TestService.getTest()
	}
