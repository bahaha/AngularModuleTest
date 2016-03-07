module.exports= function($scope, $state, TestService){
		console.log('enter controller_396')
		$scope.test = TestService.getTest()
	}
