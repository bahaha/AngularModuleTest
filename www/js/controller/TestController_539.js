module.exports= function($scope, $state, TestService){
		console.log('enter controller_539')
		$scope.test = TestService.getTest()
	}
