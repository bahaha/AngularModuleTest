module.exports= function($scope, $state, TestService){
		console.log('enter controller_942')
		$scope.test = TestService.getTest()
	}
