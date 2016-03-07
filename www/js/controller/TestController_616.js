module.exports= function($scope, $state, TestService){
		console.log('enter controller_616')
		$scope.test = TestService.getTest()
	}
