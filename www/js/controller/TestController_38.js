module.exports= function($scope, $state, TestService){
		console.log('enter controller_38')
		$scope.test = TestService.getTest()
	}
