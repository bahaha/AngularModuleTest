module.exports= function($scope, $state, TestService){
		console.log('enter controller_836')
		$scope.test = TestService.getTest()
	}
