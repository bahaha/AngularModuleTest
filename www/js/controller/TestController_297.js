module.exports= function($scope, $state, TestService){
		console.log('enter controller_297')
		$scope.test = TestService.getTest()
	}
