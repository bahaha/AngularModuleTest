module.exports= function($scope, $state, TestService){
		console.log('enter controller_204')
		$scope.test = TestService.getTest()
	}
