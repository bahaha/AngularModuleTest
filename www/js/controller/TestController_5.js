module.exports= function($scope, $state, TestService){
		console.log('enter controller_5')
		$scope.test = TestService.getTest()
	}
