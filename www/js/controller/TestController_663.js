module.exports= function($scope, $state, TestService){
		console.log('enter controller_663')
		$scope.test = TestService.getTest()
	}
