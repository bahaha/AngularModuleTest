module.exports= function($scope, $state, TestService){
		console.log('enter controller_842')
		$scope.test = TestService.getTest()
	}
