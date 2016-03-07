module.exports= function($scope, $state, TestService){
		console.log('enter controller_989')
		$scope.test = TestService.getTest()
	}
