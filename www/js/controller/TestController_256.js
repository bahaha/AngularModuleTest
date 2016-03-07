module.exports= function($scope, $state, TestService){
		console.log('enter controller_256')
		$scope.test = TestService.getTest()
	}
