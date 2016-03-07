module.exports= function($scope, $state, TestService){
		console.log('enter controller_705')
		$scope.test = TestService.getTest()
	}
