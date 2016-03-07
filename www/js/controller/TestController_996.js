module.exports= function($scope, $state, TestService){
		console.log('enter controller_996')
		$scope.test = TestService.getTest()
	}
