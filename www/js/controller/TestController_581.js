module.exports= function($scope, $state, TestService){
		console.log('enter controller_581')
		$scope.test = TestService.getTest()
	}
