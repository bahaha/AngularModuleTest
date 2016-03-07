module.exports= function($scope, $state, TestService){
		console.log('enter controller_268')
		$scope.test = TestService.getTest()
	}
