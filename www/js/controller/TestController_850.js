module.exports= function($scope, $state, TestService){
		console.log('enter controller_850')
		$scope.test = TestService.getTest()
	}
