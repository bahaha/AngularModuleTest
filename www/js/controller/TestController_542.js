module.exports= function($scope, $state, TestService){
		console.log('enter controller_542')
		$scope.test = TestService.getTest()
	}
