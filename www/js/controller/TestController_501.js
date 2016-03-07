module.exports= function($scope, $state, TestService){
		console.log('enter controller_501')
		$scope.test = TestService.getTest()
	}
