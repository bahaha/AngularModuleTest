module.exports= function($scope, $state, TestService){
		console.log('enter controller_166')
		$scope.test = TestService.getTest()
	}
