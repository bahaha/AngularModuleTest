module.exports= function($scope, $state, TestService){
		console.log('enter controller_88')
		$scope.test = TestService.getTest()
	}
