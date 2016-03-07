module.exports= function($scope, $state, TestService){
		console.log('enter controller_881')
		$scope.test = TestService.getTest()
	}
