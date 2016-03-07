module.exports= function($scope, $state, TestService){
		console.log('enter controller_357')
		$scope.test = TestService.getTest()
	}
