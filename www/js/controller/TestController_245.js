module.exports= function($scope, $state, TestService){
		console.log('enter controller_245')
		$scope.test = TestService.getTest()
	}
