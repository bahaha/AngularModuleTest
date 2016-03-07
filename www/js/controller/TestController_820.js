module.exports= function($scope, $state, TestService){
		console.log('enter controller_820')
		$scope.test = TestService.getTest()
	}
