module.exports= function($scope, $state, TestService){
		console.log('enter controller_128')
		$scope.test = TestService.getTest()
	}
