module.exports= function($scope, $state, TestService){
		console.log('enter controller_399')
		$scope.test = TestService.getTest()
	}
