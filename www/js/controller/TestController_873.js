module.exports= function($scope, $state, TestService){
		console.log('enter controller_873')
		$scope.test = TestService.getTest()
	}
