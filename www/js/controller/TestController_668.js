module.exports= function($scope, $state, TestService){
		console.log('enter controller_668')
		$scope.test = TestService.getTest()
	}
