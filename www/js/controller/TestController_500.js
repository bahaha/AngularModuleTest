module.exports= function($scope, $state, TestService){
		console.log('enter controller_500')
		$scope.test = TestService.getTest()
	}
