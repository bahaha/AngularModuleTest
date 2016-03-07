module.exports= function($scope, $state, TestService){
		console.log('enter controller_745')
		$scope.test = TestService.getTest()
	}
