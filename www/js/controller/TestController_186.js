module.exports= function($scope, $state, TestService){
		console.log('enter controller_186')
		$scope.test = TestService.getTest()
	}
