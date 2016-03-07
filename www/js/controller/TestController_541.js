module.exports= function($scope, $state, TestService){
		console.log('enter controller_541')
		$scope.test = TestService.getTest()
	}
