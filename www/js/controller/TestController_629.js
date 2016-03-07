module.exports= function($scope, $state, TestService){
		console.log('enter controller_629')
		$scope.test = TestService.getTest()
	}
