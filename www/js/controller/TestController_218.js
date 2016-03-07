module.exports= function($scope, $state, TestService){
		console.log('enter controller_218')
		$scope.test = TestService.getTest()
	}
