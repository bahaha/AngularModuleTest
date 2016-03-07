module.exports= function($scope, $state, TestService){
		console.log('enter controller_21')
		$scope.test = TestService.getTest()
	}
