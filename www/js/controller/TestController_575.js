module.exports= function($scope, $state, TestService){
		console.log('enter controller_575')
		$scope.test = TestService.getTest()
	}
