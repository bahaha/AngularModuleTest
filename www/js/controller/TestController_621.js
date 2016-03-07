module.exports= function($scope, $state, TestService){
		console.log('enter controller_621')
		$scope.test = TestService.getTest()
	}
