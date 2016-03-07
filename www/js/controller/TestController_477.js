module.exports= function($scope, $state, TestService){
		console.log('enter controller_477')
		$scope.test = TestService.getTest()
	}
