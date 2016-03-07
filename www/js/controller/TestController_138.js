module.exports= function($scope, $state, TestService){
		console.log('enter controller_138')
		$scope.test = TestService.getTest()
	}
