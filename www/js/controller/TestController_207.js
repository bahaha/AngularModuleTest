module.exports= function($scope, $state, TestService){
		console.log('enter controller_207')
		$scope.test = TestService.getTest()
	}
