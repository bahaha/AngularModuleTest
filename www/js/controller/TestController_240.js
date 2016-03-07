module.exports= function($scope, $state, TestService){
		console.log('enter controller_240')
		$scope.test = TestService.getTest()
	}
