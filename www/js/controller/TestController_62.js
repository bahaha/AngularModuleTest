module.exports= function($scope, $state, TestService){
		console.log('enter controller_62')
		$scope.test = TestService.getTest()
	}
