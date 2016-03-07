module.exports= function($scope, $state, TestService){
		console.log('enter controller_953')
		$scope.test = TestService.getTest()
	}
