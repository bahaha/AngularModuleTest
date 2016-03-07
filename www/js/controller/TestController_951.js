module.exports= function($scope, $state, TestService){
		console.log('enter controller_951')
		$scope.test = TestService.getTest()
	}
