module.exports= function($scope, $state, TestService){
		console.log('enter controller_98')
		$scope.test = TestService.getTest()
	}
