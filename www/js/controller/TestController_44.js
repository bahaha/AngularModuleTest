module.exports= function($scope, $state, TestService){
		console.log('enter controller_44')
		$scope.test = TestService.getTest()
	}
