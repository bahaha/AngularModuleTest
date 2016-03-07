module.exports= function($scope, $state, TestService){
		console.log('enter controller_612')
		$scope.test = TestService.getTest()
	}
