module.exports= function($scope, $state, TestService){
		console.log('enter controller_23')
		$scope.test = TestService.getTest()
	}
