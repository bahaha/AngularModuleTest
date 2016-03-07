module.exports= function($scope, $state, TestService){
		console.log('enter controller_984')
		$scope.test = TestService.getTest()
	}
