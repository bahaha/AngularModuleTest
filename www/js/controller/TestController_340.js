module.exports= function($scope, $state, TestService){
		console.log('enter controller_340')
		$scope.test = TestService.getTest()
	}
