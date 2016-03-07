module.exports= function($scope, $state, TestService){
		console.log('enter controller_804')
		$scope.test = TestService.getTest()
	}
