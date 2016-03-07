module.exports= function($scope, $state, TestService){
		console.log('enter controller_434')
		$scope.test = TestService.getTest()
	}
