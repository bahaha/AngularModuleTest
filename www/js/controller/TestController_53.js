module.exports= function($scope, $state, TestService){
		console.log('enter controller_53')
		$scope.test = TestService.getTest()
	}
