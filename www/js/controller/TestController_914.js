module.exports= function($scope, $state, TestService){
		console.log('enter controller_914')
		$scope.test = TestService.getTest()
	}
