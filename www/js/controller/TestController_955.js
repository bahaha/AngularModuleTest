module.exports= function($scope, $state, TestService){
		console.log('enter controller_955')
		$scope.test = TestService.getTest()
	}
