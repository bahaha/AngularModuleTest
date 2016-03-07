module.exports= function($scope, $state, TestService){
		console.log('enter controller_86')
		$scope.test = TestService.getTest()
	}
