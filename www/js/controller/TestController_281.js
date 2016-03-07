module.exports= function($scope, $state, TestService){
		console.log('enter controller_281')
		$scope.test = TestService.getTest()
	}
