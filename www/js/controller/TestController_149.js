module.exports= function($scope, $state, TestService){
		console.log('enter controller_149')
		$scope.test = TestService.getTest()
	}
