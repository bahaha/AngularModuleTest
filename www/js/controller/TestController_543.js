module.exports= function($scope, $state, TestService){
		console.log('enter controller_543')
		$scope.test = TestService.getTest()
	}
