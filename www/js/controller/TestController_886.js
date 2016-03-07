module.exports= function($scope, $state, TestService){
		console.log('enter controller_886')
		$scope.test = TestService.getTest()
	}
