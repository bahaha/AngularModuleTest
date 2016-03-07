module.exports= function($scope, $state, TestService){
		console.log('enter controller_232')
		$scope.test = TestService.getTest()
	}
