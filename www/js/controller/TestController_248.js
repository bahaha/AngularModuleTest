module.exports= function($scope, $state, TestService){
		console.log('enter controller_248')
		$scope.test = TestService.getTest()
	}
