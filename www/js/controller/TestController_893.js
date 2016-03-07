module.exports= function($scope, $state, TestService){
		console.log('enter controller_893')
		$scope.test = TestService.getTest()
	}
