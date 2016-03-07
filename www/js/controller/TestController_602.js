module.exports= function($scope, $state, TestService){
		console.log('enter controller_602')
		$scope.test = TestService.getTest()
	}
