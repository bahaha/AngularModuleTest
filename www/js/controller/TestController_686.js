module.exports= function($scope, $state, TestService){
		console.log('enter controller_686')
		$scope.test = TestService.getTest()
	}
