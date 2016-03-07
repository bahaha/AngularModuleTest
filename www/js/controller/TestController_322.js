module.exports= function($scope, $state, TestService){
		console.log('enter controller_322')
		$scope.test = TestService.getTest()
	}
