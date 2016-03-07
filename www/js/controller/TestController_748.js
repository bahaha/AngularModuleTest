module.exports= function($scope, $state, TestService){
		console.log('enter controller_748')
		$scope.test = TestService.getTest()
	}
