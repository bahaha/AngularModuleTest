module.exports= function($scope, $state, TestService){
		console.log('enter controller_102')
		$scope.test = TestService.getTest()
	}
