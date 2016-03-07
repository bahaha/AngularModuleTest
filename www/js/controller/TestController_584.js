module.exports= function($scope, $state, TestService){
		console.log('enter controller_584')
		$scope.test = TestService.getTest()
	}
