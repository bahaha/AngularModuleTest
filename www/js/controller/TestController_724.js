module.exports= function($scope, $state, TestService){
		console.log('enter controller_724')
		$scope.test = TestService.getTest()
	}
