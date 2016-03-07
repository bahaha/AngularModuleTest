module.exports= function($scope, $state, TestService){
		console.log('enter controller_366')
		$scope.test = TestService.getTest()
	}
