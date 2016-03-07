module.exports= function($scope, $state, TestService){
		console.log('enter controller_94')
		$scope.test = TestService.getTest()
	}
