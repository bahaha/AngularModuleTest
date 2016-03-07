module.exports= function($scope, $state, TestService){
		console.log('enter controller_76')
		$scope.test = TestService.getTest()
	}
