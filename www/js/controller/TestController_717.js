module.exports= function($scope, $state, TestService){
		console.log('enter controller_717')
		$scope.test = TestService.getTest()
	}
