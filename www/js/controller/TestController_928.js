module.exports= function($scope, $state, TestService){
		console.log('enter controller_928')
		$scope.test = TestService.getTest()
	}
