module.exports= function($scope, $state, TestService){
		console.log('enter controller_147')
		$scope.test = TestService.getTest()
	}
