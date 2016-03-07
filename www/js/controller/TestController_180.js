module.exports= function($scope, $state, TestService){
		console.log('enter controller_180')
		$scope.test = TestService.getTest()
	}
