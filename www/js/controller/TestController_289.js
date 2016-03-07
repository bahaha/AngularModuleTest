module.exports= function($scope, $state, TestService){
		console.log('enter controller_289')
		$scope.test = TestService.getTest()
	}
