module.exports= function($scope, $state, TestService){
		console.log('enter controller_184')
		$scope.test = TestService.getTest()
	}
