module.exports= function($scope, $state, TestService){
		console.log('enter controller_795')
		$scope.test = TestService.getTest()
	}
