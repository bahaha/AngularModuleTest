module.exports= function($scope, $state, TestService){
		console.log('enter controller_821')
		$scope.test = TestService.getTest()
	}
