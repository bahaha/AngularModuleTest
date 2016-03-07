module.exports= function($scope, $state, TestService){
		console.log('enter controller_658')
		$scope.test = TestService.getTest()
	}
