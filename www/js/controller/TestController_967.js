module.exports= function($scope, $state, TestService){
		console.log('enter controller_967')
		$scope.test = TestService.getTest()
	}
