module.exports= function($scope, $state, TestService){
		console.log('enter controller_8')
		$scope.test = TestService.getTest()
	}
