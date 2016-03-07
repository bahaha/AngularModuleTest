module.exports= function($scope, $state, TestService){
		console.log('enter controller_91')
		$scope.test = TestService.getTest()
	}
