module.exports= function($scope, $state, TestService){
		console.log('enter controller_462')
		$scope.test = TestService.getTest()
	}
