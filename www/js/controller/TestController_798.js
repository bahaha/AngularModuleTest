module.exports= function($scope, $state, TestService){
		console.log('enter controller_798')
		$scope.test = TestService.getTest()
	}
