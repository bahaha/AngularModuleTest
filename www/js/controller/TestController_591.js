module.exports= function($scope, $state, TestService){
		console.log('enter controller_591')
		$scope.test = TestService.getTest()
	}
