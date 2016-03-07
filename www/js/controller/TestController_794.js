module.exports= function($scope, $state, TestService){
		console.log('enter controller_794')
		$scope.test = TestService.getTest()
	}
