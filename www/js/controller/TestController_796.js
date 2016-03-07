module.exports= function($scope, $state, TestService){
		console.log('enter controller_796')
		$scope.test = TestService.getTest()
	}
