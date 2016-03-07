module.exports= function($scope, $state, TestService){
		console.log('enter controller_496')
		$scope.test = TestService.getTest()
	}
