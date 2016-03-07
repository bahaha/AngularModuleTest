module.exports= function($scope, $state, TestService){
		console.log('enter controller_699')
		$scope.test = TestService.getTest()
	}
