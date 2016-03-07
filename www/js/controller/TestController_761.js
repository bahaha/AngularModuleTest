module.exports= function($scope, $state, TestService){
		console.log('enter controller_761')
		$scope.test = TestService.getTest()
	}
