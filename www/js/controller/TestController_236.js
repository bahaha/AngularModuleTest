module.exports= function($scope, $state, TestService){
		console.log('enter controller_236')
		$scope.test = TestService.getTest()
	}
