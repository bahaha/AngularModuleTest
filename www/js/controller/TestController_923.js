module.exports= function($scope, $state, TestService){
		console.log('enter controller_923')
		$scope.test = TestService.getTest()
	}
