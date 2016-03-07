module.exports= function($scope, $state, TestService){
		console.log('enter controller_806')
		$scope.test = TestService.getTest()
	}
