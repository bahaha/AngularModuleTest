module.exports= function($scope, $state, TestService){
		console.log('enter controller_773')
		$scope.test = TestService.getTest()
	}
