module.exports= function($scope, $state, TestService){
		console.log('enter controller_623')
		$scope.test = TestService.getTest()
	}
