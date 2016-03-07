module.exports= function($scope, $state, TestService){
		console.log('enter controller_624')
		$scope.test = TestService.getTest()
	}
