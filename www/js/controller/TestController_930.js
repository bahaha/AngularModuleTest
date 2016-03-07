module.exports= function($scope, $state, TestService){
		console.log('enter controller_930')
		$scope.test = TestService.getTest()
	}
