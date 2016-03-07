module.exports= function($scope, $state, TestService){
		console.log('enter controller_767')
		$scope.test = TestService.getTest()
	}
