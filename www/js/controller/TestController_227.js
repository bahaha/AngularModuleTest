module.exports= function($scope, $state, TestService){
		console.log('enter controller_227')
		$scope.test = TestService.getTest()
	}
