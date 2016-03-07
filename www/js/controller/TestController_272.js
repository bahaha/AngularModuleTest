module.exports= function($scope, $state, TestService){
		console.log('enter controller_272')
		$scope.test = TestService.getTest()
	}
