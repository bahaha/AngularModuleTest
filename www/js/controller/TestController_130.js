module.exports= function($scope, $state, TestService){
		console.log('enter controller_130')
		$scope.test = TestService.getTest()
	}
