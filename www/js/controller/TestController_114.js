module.exports= function($scope, $state, TestService){
		console.log('enter controller_114')
		$scope.test = TestService.getTest()
	}
