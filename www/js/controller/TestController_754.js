module.exports= function($scope, $state, TestService){
		console.log('enter controller_754')
		$scope.test = TestService.getTest()
	}
