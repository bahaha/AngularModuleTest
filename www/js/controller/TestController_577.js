module.exports= function($scope, $state, TestService){
		console.log('enter controller_577')
		$scope.test = TestService.getTest()
	}
