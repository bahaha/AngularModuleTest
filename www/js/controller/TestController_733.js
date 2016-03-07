module.exports= function($scope, $state, TestService){
		console.log('enter controller_733')
		$scope.test = TestService.getTest()
	}
