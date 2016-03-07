module.exports= function($scope, $state, TestService){
		console.log('enter controller_619')
		$scope.test = TestService.getTest()
	}
