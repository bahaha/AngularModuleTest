module.exports= function($scope, $state, TestService){
		console.log('enter controller_103')
		$scope.test = TestService.getTest()
	}
