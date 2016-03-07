module.exports= function($scope, $state, TestService){
		console.log('enter controller_63')
		$scope.test = TestService.getTest()
	}
