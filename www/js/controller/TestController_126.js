module.exports= function($scope, $state, TestService){
		console.log('enter controller_126')
		$scope.test = TestService.getTest()
	}
