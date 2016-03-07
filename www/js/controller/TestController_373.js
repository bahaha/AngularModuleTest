module.exports= function($scope, $state, TestService){
		console.log('enter controller_373')
		$scope.test = TestService.getTest()
	}
