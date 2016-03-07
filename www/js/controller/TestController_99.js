module.exports= function($scope, $state, TestService){
		console.log('enter controller_99')
		$scope.test = TestService.getTest()
	}
