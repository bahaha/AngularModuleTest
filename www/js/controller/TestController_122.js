module.exports= function($scope, $state, TestService){
		console.log('enter controller_122')
		$scope.test = TestService.getTest()
	}
