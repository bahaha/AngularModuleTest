module.exports= function($scope, $state, TestService){
		console.log('enter controller_93')
		$scope.test = TestService.getTest()
	}
