module.exports= function($scope, $state, TestService){
		console.log('enter controller_119')
		$scope.test = TestService.getTest()
	}
