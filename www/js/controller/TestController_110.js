module.exports= function($scope, $state, TestService){
		console.log('enter controller_110')
		$scope.test = TestService.getTest()
	}
