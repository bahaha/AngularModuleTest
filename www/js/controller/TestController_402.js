module.exports= function($scope, $state, TestService){
		console.log('enter controller_402')
		$scope.test = TestService.getTest()
	}
