module.exports= function($scope, $state, TestService){
		console.log('enter controller_310')
		$scope.test = TestService.getTest()
	}
