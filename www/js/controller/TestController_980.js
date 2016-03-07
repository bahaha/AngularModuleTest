module.exports= function($scope, $state, TestService){
		console.log('enter controller_980')
		$scope.test = TestService.getTest()
	}
