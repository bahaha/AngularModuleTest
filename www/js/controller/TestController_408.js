module.exports= function($scope, $state, TestService){
		console.log('enter controller_408')
		$scope.test = TestService.getTest()
	}
