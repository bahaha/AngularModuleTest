module.exports= function($scope, $state, TestService){
		console.log('enter controller_871')
		$scope.test = TestService.getTest()
	}
