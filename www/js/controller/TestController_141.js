module.exports= function($scope, $state, TestService){
		console.log('enter controller_141')
		$scope.test = TestService.getTest()
	}
