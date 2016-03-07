module.exports= function($scope, $state, TestService){
		console.log('enter controller_421')
		$scope.test = TestService.getTest()
	}
