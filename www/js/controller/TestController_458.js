module.exports= function($scope, $state, TestService){
		console.log('enter controller_458')
		$scope.test = TestService.getTest()
	}
