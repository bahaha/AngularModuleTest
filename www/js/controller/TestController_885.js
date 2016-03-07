module.exports= function($scope, $state, TestService){
		console.log('enter controller_885')
		$scope.test = TestService.getTest()
	}
