module.exports= function($scope, $state, TestService){
		console.log('enter controller_987')
		$scope.test = TestService.getTest()
	}
