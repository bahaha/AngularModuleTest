module.exports= function($scope, $state, TestService){
		console.log('enter controller_379')
		$scope.test = TestService.getTest()
	}
