module.exports= function($scope, $state, TestService){
		console.log('enter controller_107')
		$scope.test = TestService.getTest()
	}
