module.exports= function($scope, $state, TestService){
		console.log('enter controller_117')
		$scope.test = TestService.getTest()
	}
