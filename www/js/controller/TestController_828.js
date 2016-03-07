module.exports= function($scope, $state, TestService){
		console.log('enter controller_828')
		$scope.test = TestService.getTest()
	}
