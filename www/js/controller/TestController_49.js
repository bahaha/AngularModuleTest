module.exports= function($scope, $state, TestService){
		console.log('enter controller_49')
		$scope.test = TestService.getTest()
	}
