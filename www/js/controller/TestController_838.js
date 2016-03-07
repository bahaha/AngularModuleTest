module.exports= function($scope, $state, TestService){
		console.log('enter controller_838')
		$scope.test = TestService.getTest()
	}
