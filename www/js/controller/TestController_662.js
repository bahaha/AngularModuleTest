module.exports= function($scope, $state, TestService){
		console.log('enter controller_662')
		$scope.test = TestService.getTest()
	}
