module.exports= function($scope, $state, TestService){
		console.log('enter controller_725')
		$scope.test = TestService.getTest()
	}
