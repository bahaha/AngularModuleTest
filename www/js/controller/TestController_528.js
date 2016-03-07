module.exports= function($scope, $state, TestService){
		console.log('enter controller_528')
		$scope.test = TestService.getTest()
	}
