module.exports= function($scope, $state, TestService){
		console.log('enter controller_788')
		$scope.test = TestService.getTest()
	}
