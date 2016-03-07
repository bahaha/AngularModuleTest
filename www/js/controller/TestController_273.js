module.exports= function($scope, $state, TestService){
		console.log('enter controller_273')
		$scope.test = TestService.getTest()
	}
