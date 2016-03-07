module.exports= function($scope, $state, TestService){
		console.log('enter controller_772')
		$scope.test = TestService.getTest()
	}
