module.exports= function($scope, $state, TestService){
		console.log('enter controller_499')
		$scope.test = TestService.getTest()
	}
