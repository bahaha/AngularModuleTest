module.exports= function($scope, $state, TestService){
		console.log('enter controller_627')
		$scope.test = TestService.getTest()
	}
