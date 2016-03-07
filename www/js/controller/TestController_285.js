module.exports= function($scope, $state, TestService){
		console.log('enter controller_285')
		$scope.test = TestService.getTest()
	}
