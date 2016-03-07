module.exports= function($scope, $state, TestService){
		console.log('enter controller_216')
		$scope.test = TestService.getTest()
	}
