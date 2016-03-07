module.exports= function($scope, $state, TestService){
		console.log('enter controller_463')
		$scope.test = TestService.getTest()
	}
