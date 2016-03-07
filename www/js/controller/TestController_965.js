module.exports= function($scope, $state, TestService){
		console.log('enter controller_965')
		$scope.test = TestService.getTest()
	}
