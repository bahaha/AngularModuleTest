module.exports= function($scope, $state, TestService){
		console.log('enter controller_574')
		$scope.test = TestService.getTest()
	}
