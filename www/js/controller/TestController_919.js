module.exports= function($scope, $state, TestService){
		console.log('enter controller_919')
		$scope.test = TestService.getTest()
	}
