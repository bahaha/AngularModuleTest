module.exports= function($scope, $state, TestService){
		console.log('enter controller_40')
		$scope.test = TestService.getTest()
	}
