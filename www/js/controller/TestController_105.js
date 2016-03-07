module.exports= function($scope, $state, TestService){
		console.log('enter controller_105')
		$scope.test = TestService.getTest()
	}
