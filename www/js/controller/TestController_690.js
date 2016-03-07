module.exports= function($scope, $state, TestService){
		console.log('enter controller_690')
		$scope.test = TestService.getTest()
	}
