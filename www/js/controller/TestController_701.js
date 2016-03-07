module.exports= function($scope, $state, TestService){
		console.log('enter controller_701')
		$scope.test = TestService.getTest()
	}
