module.exports= function($scope, $state, TestService){
		console.log('enter controller_454')
		$scope.test = TestService.getTest()
	}
