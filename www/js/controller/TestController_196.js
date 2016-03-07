module.exports= function($scope, $state, TestService){
		console.log('enter controller_196')
		$scope.test = TestService.getTest()
	}
