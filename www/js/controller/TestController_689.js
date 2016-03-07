module.exports= function($scope, $state, TestService){
		console.log('enter controller_689')
		$scope.test = TestService.getTest()
	}
