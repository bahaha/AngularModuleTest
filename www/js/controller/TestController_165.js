module.exports= function($scope, $state, TestService){
		console.log('enter controller_165')
		$scope.test = TestService.getTest()
	}
