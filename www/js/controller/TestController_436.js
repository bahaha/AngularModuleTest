module.exports= function($scope, $state, TestService){
		console.log('enter controller_436')
		$scope.test = TestService.getTest()
	}
