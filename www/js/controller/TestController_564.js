module.exports= function($scope, $state, TestService){
		console.log('enter controller_564')
		$scope.test = TestService.getTest()
	}
