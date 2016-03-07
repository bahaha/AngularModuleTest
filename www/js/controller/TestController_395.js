module.exports= function($scope, $state, TestService){
		console.log('enter controller_395')
		$scope.test = TestService.getTest()
	}
