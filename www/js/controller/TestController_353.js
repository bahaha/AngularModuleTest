module.exports= function($scope, $state, TestService){
		console.log('enter controller_353')
		$scope.test = TestService.getTest()
	}
