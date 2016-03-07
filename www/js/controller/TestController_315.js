module.exports= function($scope, $state, TestService){
		console.log('enter controller_315')
		$scope.test = TestService.getTest()
	}
