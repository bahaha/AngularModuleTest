module.exports= function($scope, $state, TestService){
		console.log('enter controller_350')
		$scope.test = TestService.getTest()
	}
