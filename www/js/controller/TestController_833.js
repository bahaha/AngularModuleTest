module.exports= function($scope, $state, TestService){
		console.log('enter controller_833')
		$scope.test = TestService.getTest()
	}
