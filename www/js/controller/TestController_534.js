module.exports= function($scope, $state, TestService){
		console.log('enter controller_534')
		$scope.test = TestService.getTest()
	}
