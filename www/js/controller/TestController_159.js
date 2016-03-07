module.exports= function($scope, $state, TestService){
		console.log('enter controller_159')
		$scope.test = TestService.getTest()
	}
