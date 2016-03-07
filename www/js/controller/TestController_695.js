module.exports= function($scope, $state, TestService){
		console.log('enter controller_695')
		$scope.test = TestService.getTest()
	}
